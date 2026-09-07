function CommentList(props) {
const { items } = props;

return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}







// import classes from './comment-list.module.css';


//   const { items } = props;

//   return (
//     <ul className={classes.comments}>
//       {items.map((comment) => (
//         <li key={comment.id}>
//           <p>{comment.text}</p>
//           <div>
//             By <address>{comment.name}</address>
//           </div>
//         </li>
//       ))}
//       {/* Render list of comments - fetched from API */}
//       <li>
//         <p>My comment is amazing!</p>
//         <div>
//           By <address>Maximilian</address>
//         </div>
//       </li>
//       <li>
//         <p>My comment is amazing!</p>
//         <div>
//           By <address>Maximilian</address>
//         </div>
//       </li>
//     </ul>
//   );
// }

export default CommentList;
