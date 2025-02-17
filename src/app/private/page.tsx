import PrivateLayout from "@/components/PrivateLayout";

const PrivatePage = () => {
    return (
      <PrivateLayout>
      <div>
        <h1>Página Privada</h1>
        <p>Somente usuários autenticados podem ver esta página.</p>
      </div>
      </PrivateLayout>
    );
  };
  
  export default PrivatePage;
  