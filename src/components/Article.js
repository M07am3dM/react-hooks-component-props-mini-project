export default function Article({ 
  id,
  title, 
  date = "January 1, 1970", 
  preview, 
  minutes }) {
    const emoji = minutes < 30 ?  "☕️".repeat(Math.ceil(minutes / 5)) : "🍱".repeat(Math.ceil(minutes / 10));
  return (
    <>
        <article key={id}>
          <h3>{title}</h3>
          <small>{date} {'•'} {emoji}{' '}{minutes}{' '} min read</small>
          <p></p>
          <p>{preview}</p>
        </article>

    </>
  );
}
