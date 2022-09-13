import { LayoutWithMap } from "src/layouts/LayoutWithMap";

export default function SalonsPage() {
    return "Salon list here";
}

SalonsPage.getLayout = (children) => <LayoutWithMap>{children}</LayoutWithMap>;
