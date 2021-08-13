import Info from "../components/Panel/Info";

import Table from "../components/Panel/Table";
import Thumbnails from "../components/Panel/Thumbnails";
import Spacer from "../components/Spacer/Spacer";
import Layout from "../layout/Layout";

function Home() {
  return (
    <Layout>
      <Thumbnails />
      <Spacer size={20} />
      <Info />
      <Table />
    </Layout>
  );
}

export default Home;
