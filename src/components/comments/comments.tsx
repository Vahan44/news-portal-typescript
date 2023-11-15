import React from "react";


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


  const Comments: React.FC<CommentsProps[] | null> = ({cmments}) => {
return (
    <div className="blok">
        <h2>Comments</h2>
    </div>
)
}

export default Comments