import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: '유승한',
    comment: '안녕하세요, 유승한입니다.'
  },
  {
    name: '유재석',
    comment: '리액트 재미있네요~!'
  },
  {
    name: '강민경',
    comment: '저도 리액트 배워보고 싶어요!'
  }
];

export default function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
          return (
            <Comment name={comment.name} comment={comment.comment} />
          );
      })}
    </div>
  );
}