import dynamic from "next/dynamic";
import Head from "next/head";

import config from "../cms/config";

const CMS = dynamic(
    () =>
        import("netlify-cms-app").then((cms) => {
            cms.init({ config });
        }),
    {
        ssr: false,
    }
);

const AdminPage = () => {
    return (
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>

            <CMS />
        </>
    );
};

export default AdminPage;
