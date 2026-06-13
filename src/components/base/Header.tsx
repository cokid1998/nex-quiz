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
    <header className="flex justify-center items-center border-b h-15 w-full text-3xl font-bold tracking-tight text-zinc-900">
      {pageTitle}
    </header>
  );
}
