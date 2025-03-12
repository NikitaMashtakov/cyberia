import { create } from 'zustand';
import axios from 'axios';

type Category = {
  id: number;
  name: string;
};

type Case = {
  id: number;
  title: string;
  // slug: string;
  project_url: string | null;
  image: string; // URL
  // image_dark: string; // URL
  description: string;
  // geo: {
  //   lat: number | null;
  //   lng: number | null;
  // };
  categories: Category[];
};

type StoreState = {
  cases: Case[]; // Массив элементов
  categories: Category[];
  loading: boolean; // Состояние загрузки
  error: string | null; // Ошибка
  fetchCases: () => Promise<void>; // Метод для загрузки данных
  fetchCategories: () => Promise<void>;
};

export const useStore = create<StoreState>((set) => ({
  cases: [],
  categories: [],
  loading: false,
  error: null,

  fetchCases: async () => {
    set({ loading: true, error: null });
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
        loading: false,
      });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message || 'Failed to load items', loading: false });
      }
    }
  },

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        'https://api.test.cyberia.studio/api/v1/project-categories',
      ); // Замените URL на ваш API
      set({ categories: response.data.items, loading: false });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message || 'Failed to load items', loading: false });
      }
    }
  },
}));
