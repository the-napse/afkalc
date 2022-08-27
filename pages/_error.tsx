import { mdiAlertCircleOutline } from "@mdi/js";
import { GetServerSidePropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";
import withLayoutPrivateColumn from "../components/layout/withLayoutPrivateColumn";
import Card from "../components/ui/card/Card";
import CardTitle from "../components/ui/card/CardTitle";
import CardWarn from "../components/ui/card/CardWarn";

export async function getServerSideProps(context: GetServerSidePropsContext<{}>) {
  const { locale, res } = context;
  const { statusCode } = res;

  const localeData = await serverSideTranslations(locale ?? "", ["common"]);

  return { props: { ...localeData, statusCode } };
}

interface IProps {
  [key: string]: never;
}

const Error: React.FC<IProps> = function Error({ statusCode }) {
  const { t } = useTranslation("common");

  const text = `${t("error.unknown-error")}\n\n${t("error.send-message")}\n\n${t("error.thanks")}`;

  return (
    <Card>
      <CardTitle icon={mdiAlertCircleOutline}>{t("error.error", { code: statusCode })}</CardTitle>
      <Head>
        <title>{`${t("common:menu.home")} - Afkalc`}</title>
        <meta name="description" content={t("common:welcome")} />
      </Head>
      <CardWarn>{text}</CardWarn>
      <svg
        width="100"
        height="90"
        viewBox="202.85 211.72 346.31 310.79"
        style={{ display: "block", margin: "auto auto 32px auto", fill: "var(--text-color)" }}
      >
        <path d="m233.93 522.51h284.15c17.133 0 31.078-13.941 31.078-31.078v-248.63c0-17.133-13.941-31.078-31.078-31.078l-284.15 0.003907c-17.133 0-31.078 13.941-31.078 31.078v248.63c0.003906 17.133 13.945 31.074 31.078 31.074zm0-301.9h284.15c12.242 0 22.203 9.9531 22.203 22.203v22.203l-328.55-0.003906v-22.203c0-12.242 9.9531-22.199 22.199-22.199zm-22.199 53.277h328.55v217.55c0 12.242-9.9609 22.203-22.203 22.203l-284.14-0.003906c-12.246 0-22.203-9.9531-22.203-22.203z" />
        <path d="m251.69 242.81c0 4.9023-3.9766 8.8789-8.8789 8.8789-4.9062 0-8.8828-3.9766-8.8828-8.8789 0-4.9062 3.9766-8.8828 8.8828-8.8828 4.9023 0 8.8789 3.9766 8.8789 8.8828" />
        <path d="m287.2 242.81c0 4.9023-3.9727 8.8789-8.8789 8.8789-4.9023 0-8.8789-3.9766-8.8789-8.8789 0-4.9062 3.9766-8.8828 8.8789-8.8828 4.9062 0 8.8789 3.9766 8.8789 8.8828" />
        <path d="m322.72 242.81c0 4.9023-3.9766 8.8789-8.8789 8.8789s-8.8789-3.9766-8.8789-8.8789c0-4.9062 3.9766-8.8828 8.8789-8.8828s8.8789 3.9766 8.8789 8.8828" />
        <path d="m411.52 442.6h-71.039c-2.457 0-4.4414 1.9844-4.4414 4.4414 0 2.457 1.9844 4.4414 4.4414 4.4414h39.961v13.316c0 9.7891 7.9609 17.758 17.758 17.758 9.793 0 17.758-7.9688 17.758-17.758l0.003907-17.758c0-2.457-1.9883-4.4414-4.4414-4.4414zm-13.316 31.078c-4.8906 0-8.8789-3.9766-8.8789-8.8789v-13.316h17.758v13.316c-0.003906 4.8984-3.9922 8.8789-8.8789 8.8789z" />
        <path d="m319.58 423.54c0.87109 0.86719 2.0039 1.2969 3.1406 1.2969 1.1367 0 2.2695-0.42969 3.1406-1.2969l5.7383-5.7383 5.7383 5.7383c0.87109 0.86719 2.0039 1.2969 3.1406 1.2969s2.2695-0.42969 3.1406-1.2969c1.7344-1.7344 1.7344-4.543 0-6.2812l-5.7422-5.7383 5.7461-5.7383c1.7344-1.7344 1.7344-4.543 0-6.2812s-4.5469-1.7344-6.2812 0l-5.7383 5.7383-5.7383-5.7383c-1.7344-1.7344-4.5469-1.7344-6.2812 0-1.7344 1.7344-1.7344 4.543 0 6.2812l5.7383 5.7383-5.7383 5.7383c-1.7344 1.7344-1.7344 4.543-0.003907 6.2812z" />
        <path d="m408.38 423.54c0.86719 0.86719 2.0039 1.2969 3.1406 1.2969 1.1328 0 2.2695-0.42969 3.1367-1.2969l5.7461-5.7383 5.7383 5.7383c0.86719 0.86719 2.0039 1.2969 3.1406 1.2969 1.1328 0 2.2695-0.42969 3.1367-1.2969 1.7383-1.7344 1.7383-4.543 0-6.2812l-5.7422-5.7383 5.7383-5.7383c1.7383-1.7344 1.7383-4.543 0-6.2812-1.7305-1.7344-4.543-1.7344-6.2734 0l-5.7383 5.7383-5.7461-5.7383c-1.7305-1.7344-4.543-1.7344-6.2734 0-1.7344 1.7344-1.7344 4.543 0 6.2812l5.7383 5.7383-5.7383 5.7383c-1.7344 1.7344-1.7344 4.543-0.003906 6.2812z" />
      </svg>
    </Card>
  );
};

export default withLayoutPrivateColumn(Error);