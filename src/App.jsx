// Dependencias
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Toaster, toast } from 'sonner'

// Variables
const anchoInput = "w-full md:w-[calc(10%-1rem)]";
const anchoButton = "w-full md:w-[calc(35%-1rem)]";
const anchoOutput = "w-full md:w-[calc(55%-1rem)]";

const generate = () => {
  let length = document.getElementById("length").value;
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * charset.length);
    password += charset.substring(random, random + 1);
  }
  document.getElementById("password").value = password;
};

const copyPassword = () => {
  let password = document.getElementById("password").value;
  let alert = document.getElementById("alert");
  let alert2 = document.getElementById("alert2");

  if (password.length < 6) {
    toast.error('Elige una longitud mayor o igual a 6 caracteres')
  } else {
    navigator.clipboard.writeText(password);
    toast.success('Contraseña copiada con éxito!')
  }
};

const copyIcon = () => {
  return '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path> <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg>';
};

function App() {
  return (
    <div className="w-screen flex justify-center items-center gap-5">
    <Toaster position="top-center" richColors />
      <div className="px-12 py-12 sm:px-20 max-w-5xl flex gap-5 flex-wrap justify-evenly">
        <h1
          className="text-3xl md:text-4xl font-bold w-full text-center mb-2"
          style={{ color: "#d22" }}
        >
          🗝️ Generador de contraseñas
        </h1>
        <p className="text-xs w-full text-center mb-6">
          {" "}
          <strong>Disclaimer:</strong> No me hago responsable del uso que se le
          de a esta herramienta. Es un proyecto personal y no tiene fines
          comerciales. No almaceno ni recojo datos de ningún tipo. Y no me hago
          responsable de la seguridad de las contraseñas generadas.{" "}
        </p>

        <TextField
          id="length"
          defaultValue="6"
          InputProps={{
            inputProps: { min: 6, max: 36 },
            onFocus: {
              color: "#d22",
            },
          }}
          variant="outlined"
          className={anchoInput}
          type="number"
        />
        <Button
          variant="contained"
          className={anchoButton}
          style={{ backgroundColor: "#d22", color: "#fff", paddingTop: "1rem", paddingBottom: "1rem"}}
          onClick={generate}
        >
          Generar contraseña
        </Button>
        <OutlinedInput
          id="password"
          endAdornment={
            <InputAdornment position="end">
              {" "}
              <span dangerouslySetInnerHTML={{ __html: copyIcon() }} />{" "}
            </InputAdornment>
          }
          InputProps={{
            readOnly: true,
          }}
          style={{ cursor: "pointer" }}
          variant="outlined"
          className={anchoOutput}
          onClick={copyPassword}
        />
        <p className="text-s w-full text-center mt-6">
          {" "}
          Hecho con la mejor 🤙 por{" "}
          <a
            href="https://github.com/creativoma"
            target="_blank"
            style={{ color: "#d22" }}
          >
            Mariano Álvarez
          </a>{" "}
          - Copyright © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
export default App;
