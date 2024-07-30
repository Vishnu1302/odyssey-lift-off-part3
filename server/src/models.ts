export type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  numberOfViews: number;
  description: string;
  modulesCount: number;
};

export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};
 
export type ModuleModel = {
  id: string;
  title: string;
  length: number; 
  // videoUrl: string;
  // content: string;
};