import React, { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import { FaRegCopy } from "react-icons/fa6";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

import { CHARSET_OPTIONS } from "./constants";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const generate = () => {
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * CHARSET_OPTIONS.length);
      generatedPassword += CHARSET_OPTIONS.substring(random, random + 1);
    }
    setPassword(generatedPassword);
  };

  const handleGenerateClick = () => {
    generate();
  };

  const handleCopyClick = () => {
    if (password.length < 6) {
      toast.error("Elige una longitud mayor o igual a 6 caracteres");
    } else {
      navigator.clipboard.writeText(password);
      setCopied(true);
      toast.success("Contraseña copiada con éxito!");
    }
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="w-screen flex justify-center items-center gap-5">
        <div className="px-12 py-12 sm:px-20 max-w-5xl flex gap-4 flex-wrap justify-evenly">
          <h1 className="text-3xl md:text-4xl font-bold w-full text-center mb-2 text-[#d22] text-balance">
            Password Generador 🗝️
          </h1>
          <p className="text-xs w-full text-center mb-6">
            {" "}
            <strong>Disclaimer:</strong> No me hago responsable del uso que se
            le de a esta herramienta. Es un proyecto personal y no tiene fines
            comerciales. No almaceno ni recojo datos de ningún tipo. Y no me
            hago responsable de la seguridad de las contraseñas generadas.{" "}
          </p>

          <TextField
            ref={inputRef}
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            InputProps={{
              inputProps: { min: 8, max: 36 },
            }}
            variant="outlined"
            className="w-[calc(30%-.5rem)] md:w-[calc(20%-1rem)]"
            type="number"
          />
          <Button
            onClick={handleGenerateClick}
            variant="contained"
            className="w-[calc(70%-.5rem)] md:w-[calc(35%-1rem)]"
            style={{
              backgroundColor: "#d22",
              color: "white",
              height: "56px",
              lineHeight: "1.5em",
            }}
          >
            Generar Contraseña
          </Button>
          <OutlinedInput
            id="password"
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <FaRegCopy
                  className="text-[#d22] cursor-pointer"
                  onClick={handleCopyClick}
                />
              </InputAdornment>
            }
            readOnly
            variant="outlined"
            className="w-full md:w-[calc(45%-1rem)] cursor-pointer"
            onClick={handleCopyClick}
          />
          <p className="text-s w-full text-center mt-6">
            By{" "}
            <a
              href="https://github.com/creativoma"
              target="_blank"
              className="text-[#d22]"
            >
              Mariano Álvarez
            </a>{" "}
            ~ {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
