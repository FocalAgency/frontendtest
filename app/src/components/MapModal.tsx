import type { RefObject } from "react";

interface MapModalProps {
  dialogRef: RefObject<HTMLDialogElement | null>;
}

const MapModal = ({ dialogRef }: MapModalProps) => {
  return (
    <dialog
      ref={dialogRef}
      aria-label="Location map"
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-y-auto overscroll-contain border-0 bg-transparent p-0 text-white backdrop:bg-black/60"
    >
      <form method="dialog" className="fixed top-4 right-4 z-10 sm:top-8 sm:right-8">
        <button
          type="submit"
          autoFocus
          className="min-h-11 min-w-11 px-3 text-lg font-bold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Close
        </button>
      </form>

      <div className="flex min-h-full items-center justify-center px-4 py-20 sm:px-8">
      <iframe
        title="Map showing Un.titled in Leicester"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.9254597722654!2d-1.1339286902650432!3d52.63915745447631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7314784b68c14c0!2sUn.titled!5e0!3m2!1sen!2suk!4v1575994684235!5m2!1sen!2suk"
        width={600}
        height={450}
        className="block h-[min(70dvh,700px)] w-full max-w-[1000px] border-0 bg-white"
        allowFullScreen
      />
      </div>
    </dialog>
  );
};

export default MapModal;
