import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { MENU, CAFE, DISCOUNT } from "@/constants/url";
import { useLocation } from "react-router";

const PATH_MAP: Record<string, string> = {
  [MENU]: "음식 레시피",
  [CAFE]: "음료 레시피",
  [DISCOUNT]: "현금 할인",
};

export default function Header() {
  const { pathname } = useLocation();
  const pageTitle = PATH_MAP[pathname] ?? "오류";

  return (
    <header className="flex shrink-0 justify-center items-center gap-2 border-b px-4 h-15 w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-lg">{pageTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
