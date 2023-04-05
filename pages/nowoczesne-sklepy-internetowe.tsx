import Cursor from "@/components/misc/Cursor";
import CardShop from "@/components/nowoczesne-strony-internetowe/CardShop";
import CardWebsite from "@/components/nowoczesne-strony-internetowe/CardWebsite";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import CardService from "@/components/universal/CardService";
import PageHeading from "@/components/universal/PageHeading";
import ArticleHead from "@/components/universal/ArticleHead";
import Link from "next/link";
import React, { Fragment } from "react";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiShieldStarLine } from "react-icons/ri";
import { SiPrestashop, SiShopify } from "react-icons/si";

type Props = {};

function sklepy_internetowe({}: Props) {
  return (
    <div>
      <Cursor />
      <Header />
      <div className="container p-4 xl:p-0 mx-auto relative">
        <div className="flex flex-row flex-wrap">
          <div className="xl:w-[65%]">
            <PageHeading
              title={
                <Fragment>
                  Nowoczesne sklepy internetowe, dostarczające{" "}
                  <span className="ul-effect">pozytywne doświadczenia</span>
                </Fragment>
              }
              subtitle="Wybierz rozwiązanie, które lepiej do Ciebie pasuje, poniżej zapoznasz się z dwoma ścieżkami, które realizujemy"
            />
          </div>
          <div className="xl:mt-40 xl:w-[33%] h-[520px] sm:h-[480px] md:h-[450px] xl:h-[550px]">
            <div className="bg-gradient-to-br from-yellow-50 hover:scale-105 transition-all relative dark:to-black dark:from-slate-900 to-yellow-100 bg-opacity-10 rounded-sm h-full  p-6">
              <h1 className="fo-bold text-5xl">
                <span className="bg-gradient-to-br bg-clip-text text-transparent from-orange-400 to-yellow-200">
                  Rozwiązania headless eCommerce
                </span>
              </h1>
              <div className="m-12">
                <div className="diamond-container">
                  <div className="diamond">
                    <div className="diamond-top"></div>
                    <div className="diamond-bottom"></div>
                  </div>
                  <div className="sparkles">
                    <div className="one">✨</div>
                    <div className="two">✨</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 ">
                <span className="fo-semibold text-md">
                  Najnowocześniejsze rozwiązania eCommerce, nieograniczone
                  możliwości dzięki koncepcji API-first. Pełna skalowalność i
                  customizacja sklepu internetowego
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-6 flex flex-row flex-wrap mt-12 xl:mt-0">
          <h2 className="text-6xl text-head">
            Tak budujemy świetne <strong>sklepy internetowe eCommerce</strong>
          </h2>
          <div className="">
            <p className="p-service-details">
              Budowanie świetnego sklepu internetowego to złożony proces, który
              wymaga wiedzy z wielu dziedzin - projektowania, SEO, optymalizacji
              szybkości strony, zarządzania treścią i nie tylko.
            </p>
            <p className="p-service-details">
              Połączenie tych obszarów wiedzy jest niezbędne do stworzenia
              sklepu, który zapewnia wyjątkowe wrażenia zarówno obsłudze sklepu,
              jak i klientom, którzy go odwiedzają.
            </p>
            <p className="p-service-details">
              Wykorzystując te umiejętności, możemy zaprojektować i
              zoptymalizować sklep, który maksymalizuje konwersje, zwiększa
              przychody i zapewnia użytkownikom przyjemne zakupy.
            </p>

            <ArticleHead title="Płynne zarządzanie treścią" />

            <p className="p-service-details">
              Zarządzanie treścią jest niezbędne dla odnoszącego sukcesy sklepu
              internetowego. Wpływa na wrażenia użytkownika i produktywność
              obsługi sklepu
            </p>
            <p className="p-service-details">
              Treścią można zarządzać bezpośrednio z panelów administracyjnych w
              przypadku{" "}
              <Link href="/shopify" className="link">
                Shopify
              </Link>{" "}
              jak i{" "}
              <Link href="/prestashop" className="link">
                PrestaShop
              </Link>{" "}
              lub za pomocą headless CMS, takiego jak{" "}
              <Link href="/headless-sanity" className="link">
                Sanity
              </Link>
              , który umożliwia korzystanie z zaawansowanych funkcji, takich jak
              szybkie tworzenie landing page i odwoływanie się do produktów z
              dowolnego miejsca na stronie internetowej.
            </p>
            <p className="p-service-details">
              Sprawny system zarządzania treścią poprawia wydajność i napędza
              rozwój sklepu.
            </p>

            <ArticleHead title="Proste zarządzanie krajami i walutami" />

            <p className="p-service-details">
              Sklepy internetowe rozwijają się na całym świecie, dlatego
              konieczne jest branie pod uwagę czynników takich jak przepisy
              regionalne, język i różnice kulturowe, aby zapewnić bezproblemową
              obsługę klientom na całym świecie.
            </p>
            <p className="p-service-details">
              Kluczowym aspektem tego jest posiadanie platformy, która obsługuje
              funkcje wielu języków i walut, umożliwiając sklepom szybkie
              zarządzanie treścią i produktami dla różnych lokalizacji na całym
              świecie.
            </p>
            <p className="p-service-details">
              Sklepy internetowe, które budujemy w oparciu o{" "}
              <Link href="/shopify" className="link">
                Shopify
              </Link>{" "}
              lub{" "}
              <Link href="/prestashop" className="link">
                PrestaShop
              </Link>{" "}
              oferuje opcje automatycznego tłumaczenia, usprawniając proces
              tłumaczenia treści i umożliwiając sklepom dostarczanie spójnych i
              odpowiednich doświadczeń klientom z każdego zakątka świata.
            </p>
          </div>
          <div className="w-[100%] xl:w-[45%] relative">
            <div className="flex flex-col">
              <CardShop
                classes="bg-gradient-to-t text-white from-[#2f1757] hover:scale-105 to-[#780f5f]"
                title="PrestaShop"
                icon={
                  <SiPrestashop
                    size={100}
                    className=" absolute top-4 right-4"
                  />
                }
                description=""
                href="/prestashop"
              />
              {/* description="Jeśli chcesz rozpocząć sprzedaż w internecie, w ofercie nie masz dziesiątek tysięcy produktów i nie myślisz o rozwoju swojego sklepu o dodatkowe kanały sprzedaży jak aplikacje mobilne, to PrestaShop jest dla Ciebie. To tańsza alternatywa, ale spełniająca w zupełności wymagania małych i średnich sklepów internetowych. Intyuicyjny panel sklepu, integracje z bramkami płatności, przewoźnikami oraz z firmami księgowymi i wiele, wiele więcej... " */}
              <div className="px-4 py-10">
                <h2 className="text-xl">
                  Oto niektóre z zalet posiadania sklepu internetowego w
                  PrestaShop:
                </h2>
                <ul className="list-disc py-4">
                  <li>
                    PrestaShop jest oprogramowaniem hostowanym samodzielnie, co
                    oznacza, że można ją w pełni dostosować do własnych upodobań
                    i potrzeb
                  </li>
                  <li>PrestaShop jest oprogramowaniem darmowym</li>
                  <li>
                    Dla PrestaShop dostępnych jest ponad 4000 dodatków (moduły,
                    szablony, etc){" "}
                  </li>
                  <li>
                    Posiada funkcję wielu sklepów, jeśli masz więcej niż jeden
                    sklep
                  </li>
                  <li>PrestaShop obsługuje wiele języków oraz walut</li>
                  <li>Zawiera narzędzia do pozycjonowania SEO</li>
                </ul>
                <table className="mx-auto w-full text-center table table-auto">
                  <thead>
                    <tr>
                      <th>Zalety</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Open Source</td>
                    </tr>
                    <tr>
                      <td>Pełna customizacja</td>
                    </tr>
                    <tr>
                      <td>+4000 dodatków</td>
                    </tr>
                    <tr>
                      <td>Skalowalność</td>
                    </tr>
                  </tbody>
                </table>
                <h2 className="text-xl">
                  Z drugiej strony PrestaShop ma pewne wady:
                </h2>
                <ul className="list-disc py-4">
                  <li>
                    Kilka darmowych dodatków. Musisz zastanowić się, które
                    funkcje są dla Ciebie najważniejsze.
                  </li>
                  <li>
                    Za bezpieczeństwo swoich klientów oraz sklepu internetowego
                    odpowiedzialny jest właściciel
                  </li>
                  <li>
                    Hosting, domena oraz aktualizacja po stronie właściciela
                    sklepu
                  </li>
                  <li>Tłumaczenia na wiele języków, ale zdarzają się błędy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[100%] xl:w-[45%]">
            <div className="flex flex-col">
              <CardShop
                classes="bg-gradient-to-b text-white from-[#8ab246] to-[#55823c] hover:scale-105"
                title="shopify"
                icon={
                  <SiShopify size={80} className=" absolute top-4 right-4" />
                }
                description=""
                href="/shopify"
              />
              <div className="px-4 py-10">
                <h2 className="text-xl">
                  Shopify oferuje wiele korzyści i przydatnych narzędzi, jeśli
                  chodzi o zarządzanie sklepem internetowym. Niektóre z nich to:
                </h2>
                <ul className="list-disc py-4">
                  <li>łatwość i szybkość tworzenia oraz użytkowania</li>
                  <li>
                    Shopify zapewnia domenę, serwer oraz oprogramowanie (+
                    aktualizacje)
                  </li>
                  <li>
                    aplikacje Shopify, które pozwalają optymalizować i
                    rozszerzać funkcje Twojego sklepu internetowego (ponad 6000)
                  </li>
                </ul>
                <table className="mx-auto w-[90%] xl:w-full text-center table table-auto">
                  <thead>
                    <tr>
                      <th>Zalety</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Serwer, domena oraz aktualizacje w pakiecie</td>
                    </tr>
                    <tr>
                      <td>Prosta i szybka instalacja</td>
                    </tr>
                    <tr>
                      <td>+6000 dodatków</td>
                    </tr>
                    <tr>
                      <td>Łatwy w użyciu</td>
                    </tr>
                  </tbody>
                </table>
                <h2 className="text-xl">
                  Shopify również nie jest wolne od wad, na przykład:
                </h2>
                <ul className="list-disc py-4">
                  <li>abonament miesięczny lub roczny</li>
                  <li>
                    Opłaty. Gdy dokkonujesz sprzedaży w Shopify za pośrednictwem
                    innej bramki płatności niż Shopify Payments, platforma
                    pobiera opłatę za sprzedaż, która jest zależna od
                    subskrybowanego planu
                  </li>
                  <li>nie tak konfigurowalny jak PrestaShop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default sklepy_internetowe;
