import { Button, Textarea, Label } from "@/components/forms/shadcn";
import { GoogleMapComponent } from "@/components/features";

export function Footer() {
  return (
    <footer className="flex w-full bg-footer h-auto mt-auto p-4 gap-4">
      <div>
        <p>CONTACTANOS</p>
        <p>¡Queremos conocerte!</p>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea id="message" placeholder="Escribe tu mensaje aquí" />
          <Button>Enviar Mensaje</Button>
        </div>
      </div>
      <div>
        <h1>LINKS DE INTERÉS</h1>
        <p>Organizaciones Nacionales</p>
        <a href="#">
          Instituto de Nutrición y Tecnología de los Alimentos (INTA)
        </a>
        <a href="#">Campaña 5 al día</a>
        <a href="#">Ministerio de Salud (MINSAL)</a>
        <a href="#">
          División de Prevención y Control de Enfermedades (DIPRECE)
        </a>
        <a href="#">Biblioteca MINSAL</a>
        <a href="#">Elige Vivir Sano</a>
        <p>Organizaciones Internacionales </p>
        <a href="#">Organización Mundial de la Salud (OMS)</a>
        <a href="#">
          Centros para el Control y Prevención de Enfermedades (CDC)
        </a>
        <a href="#">Organización Panamericana de la Salud (OPS)</a>
        <a href="#">Portal Antioxidantes</a>
        <p>Enfermedad Celiaca</p>
        <a href="#">Corporación de Apoyo al Celíaco</a>
        <a href="#">Fundación de Intolerancia al Gluten (Convivir)</a>
        <p>Enfermedades Metabólicas</p>
        <a href="#">Grupo de Enfermedades Metabólicas</a>
      </div>
      <div className="flex justify-center items-center rounded-lg">
        <GoogleMapComponent />
      </div>
    </footer>
  );
}
