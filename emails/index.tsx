import { Tailwind, Html } from "@react-email/components";

interface FormData {
  nameContact: string;
  emailContact: string;
  numberContact: string;
  messageContact: string;
}

export default function Email(dataForm: FormData) {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <div className="flex flex-col px-6 py-3">
          <div className="flex gap-6 justify-start">
            <div className="mr-3">
              <p className="m-0">
                <strong>Nom:</strong>
              </p>
              <p className="m-0 mb-6">{dataForm.nameContact}</p>
            </div>
          </div>
          <div>
            <p className="m-0">
              <strong>Numéro:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.numberContact}</p>
          </div>

          <div className="mr-3">
            <p className="m-0">
              <strong>Email:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.emailContact}</p>
          </div>

          <div>
            <p className="m-0">
              <strong>Message:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.messageContact}</p>
          </div>
        </div>
      </Tailwind>
    </Html>
  );
}
