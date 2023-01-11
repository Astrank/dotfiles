import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Component } from "react";
import Script from "next/script";

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
                <Script
                    strategy="afterInteractive"
                    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                    async
                ></Script>
            </Head>

            <CMS />
        </>
    );
};

export default AdminPage;
