
export interface NewsCardProps {
  id: number;
  title: string;
  content: string;
  image: string;
  publishDate: string;
  comments: CommentsProps[] | null;
}

 interface CommentsProps {
  id : number;
  autor : {id: number, name: string, image: string};
  text: string;
  date?: string;
  replay?: replay[] | []
}

interface replay {
  id : number;
  autor : {id: number, name: string, image: string};
  text: string;
}


