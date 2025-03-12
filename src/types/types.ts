export type Category = {
  id: number;
  name: string;
};

export type Case = {
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
