export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <lable>Initial Investment</lable>
          <input type="number" required />
        </p>
        <p>
          <lable>Annual Investment</lable>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <lable>Expected Return</lable>
          <input type="number" required />
        </p>
        <p>
          <lable>Duration</lable>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
