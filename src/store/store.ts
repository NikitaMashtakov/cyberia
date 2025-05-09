import { create } from 'zustand';
import axios from 'axios';
import { Case, Category } from '../types/types';

type StoreState = {
  cases: Case[]; // Массив элементов
  categories: Category[];
  error: string | null; // Ошибка
  activeCategory: number | null;
};

type StoreAction = {
  setActiveCategory: (id: number | null) => void;
  fetchCases: () => Promise<void>; // Метод для загрузки данных
  fetchCategories: () => Promise<void>;
};

export const useStore = create<StoreState & StoreAction>((set) => ({
  cases: [],
  categories: [],
  error: null,
  activeCategory: null,

  setActiveCategory: (id) => set({ activeCategory: id }),

  fetchCases: async () => {
    set({ error: null });
    try {
      const response = await axios.get('https://api.test.cyberia.studio/api/v1/projects'); // Замените URL на ваш API
      set({
        cases: response.data.items.map(
          ({ id, title, project_url, image, description, categories }: Case) => ({
            id: id,
            title: title,
            project_url: project_url,
            image: image,
            description: description,
            categories: categories,
          }),
        ),
      });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message || 'Failed to load items' });
      }
    }
  },

  fetchCategories: async () => {
    set({ error: null });
    try {
      const response = await axios.get(
        'https://api.test.cyberia.studio/api/v1/project-categories',
      ); // Замените URL на ваш API
      set({ categories: response.data.items });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message || 'Failed to load items' });
      }
    }
  },
}));
