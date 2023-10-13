import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import './App.css'
import { MainLayout } from "./Layout/MainLayout";

// Categories
import { HomePage } from "./Pages/AllHomePage/HomePage";
import { NationalPage } from "./Pages/Categories/NationalPage";
import { InternationalPage } from "./Pages/Categories/InternationalPage";
import { TechnologyPage } from "./Pages/Categories/TechnologyPage";
import { SportPage } from "./Pages/Categories/SportPage";
import { PoliticsPage } from "./Pages/Categories/PoliticsPage";
import { SocietyPage } from "./Pages/Categories/SocietyPage";

// Detials
import { OneArticle } from "./Pages/DetailsPage/OneArticle";

// LoginPage
import { LoginPage } from "./Pages/LoginPage/LoginPage";

// Error
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";

// Krav:
// Nyheds sitet skal være responsivt og fungere på en mobil telefon
// Nyhederne skal kunne sorteres ud fra kategorierne der er vist i navigationen +++
// Alle nyheder skal have følgende: Overskrift, Dato, Skribent, Billede(r), Indhold, Kategori +++
// Der skal være mulighed for at trykke "læs mere" hvilket viser hele artiklen i et nyt view +++
// Der skal være tilhørende footer, men de viste links behøver ikke virke +++

// Bonus:
// Sitet skal have et login, hvor man kan logge på som admin
// Når man er logget ind skifter nyhederne til at indeholde to knapper (opdater og slet)
// Når man trykker opdater skal der komme en ny side hvor man kan redigere i artiklen og gemme den opdaterede artikel i sit CMS
// Når man trykker slet skal artiklen slettes fra sit CMS

function App() {
  const queryClient = new QueryClient();

  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage/>}/>
            <Route path="/indland" element={<NationalPage/>}/>
            <Route path="/udland" element={<InternationalPage/>}/>
            <Route path="/teknologi" element={<TechnologyPage/>}/>
            <Route path="/sport" element={<SportPage/>}/>
            <Route path="/politik" element={<PoliticsPage/>}/>
            <Route path="/samfund" element={<SocietyPage/>}/>
            <Route path="/article/:id" element={<OneArticle/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App
