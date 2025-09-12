import Swal from "sweetalert2";
// Helper to show a confirmation dialog

export const confirmAction = async (
  title = "Əminsiniz?",
  text = "Bu addım geri qaytarıla bilməz!"
) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3966b0",
    cancelButtonColor: "#d33",
    confirmButtonText: "Davam et",
  });
};

export const handleDeleteDoctor = async (deleteDoctor, slug) => {
  const result = await confirmAction(
    "Tamamilə silinsin?",
    "Bu həkim və bütün məlumatları silinəcək!"
  );
  if (result.isConfirmed) {
    try {
      await deleteDoctor({ slug }).unwrap();
      Swal.fire("Silindi!", "Həkim tamamilə silindi.", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Xəta!", "Silinmə zamanı problem yarandı.", "error");
    }
  }
};
