export default function Contact() {
  return (
    <div className="flex mt-32 max-w-7xl m-auto">
      <div className="flex-1 p-6 py-24">
        <h1 className="text-4xl">Contactez moi</h1>
        <p>une question ? contactez moi</p>
      </div>
      <div className="flex-1 p-6 py-24">
        <form action="" className="text-center border p-12">
          <input
            type="text"
            placeholder="Nom"
            className="w-full mb-5 p-2 rounded border border-gray-300"
          />

          <input
            type="text"
            placeholder="Prénom"
            required
            className="w-full mb-5 p-2 rounded border border-gray-300"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full mb-5 p-2 rounded border border-gray-300"
          />

          <input
            type="number"
            placeholder="Numéro"
            required
            className="w-full mb-5 p-2 rounded border border-gray-300"
          />

          <textarea
            placeholder="Votre message..."
            rows={5}
            required
            className="w-full mb-5 p-2 rounded border border-gray-300"
          />

          <input
            type="submit"
            className=" max-w-24 m-auto mt-3 bg-secondary hover:bg-secondary  hover:scale-105 transition duration-200 ease-in-out"
          />
        </form>
      </div>
    </div>
  );
}
