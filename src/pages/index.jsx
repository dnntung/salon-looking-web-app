import DashboardLayout from "src/layouts/DashboardLayout";

export default function HomePage() {
    return "Nothing here";
}

HomePage.getLayout = (children) => (
    <DashboardLayout>{children}</DashboardLayout>
);
