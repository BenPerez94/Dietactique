export default function AddArticle() {
  return (
    <div className=" mt-40 container p-6 border">
      <div>
        <h1>Envoyer une NewsLetter</h1>
        <form className="flex flex-col gap-6">
          <div>
            <label htmlFor="title">Titre de l'article:</label>
            <input
              type="text"
              id="title"
              required
              placeholder="Titre de l'article"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
