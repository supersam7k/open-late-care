export type Listing = {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapsQuery: string;
};

export type CityData = {
  slug: string;
  name: string;
  listings: Listing[];
};

export const cities: CityData[] = [
  {
    slug: "los-angeles",
    name: "Los Angeles",
    listings: [
      { name: "CityMD Urgent Care – Hollywood", address: "6430 Sunset Blvd, Los Angeles, CA 90028", phone: "(323) 522-7000", hours: "Mon–Sun 8am–10pm", mapsQuery: "6430+Sunset+Blvd+Los+Angeles+CA+90028" },
      { name: "Concentra Urgent Care – Downtown LA", address: "700 S Flower St Ste 100, Los Angeles, CA 90017", phone: "(213) 489-9000", hours: "Mon–Fri 8am–5pm, Sat–Sun Closed", mapsQuery: "700+S+Flower+St+Los+Angeles+CA+90017" },
      { name: "AFC Urgent Care – Los Feliz", address: "4330 Los Feliz Blvd, Los Angeles, CA 90027", phone: "(323) 661-2500", hours: "Mon–Sun 8am–8pm", mapsQuery: "4330+Los+Feliz+Blvd+Los+Angeles+CA+90027" },
      { name: "Cedars-Sinai Urgent Care – Beverly Grove", address: "8750 W 3rd St, Los Angeles, CA 90048", phone: "(310) 423-8000", hours: "Mon–Sun 9am–9pm", mapsQuery: "8750+W+3rd+St+Los+Angeles+CA+90048" },
      { name: "NextCare Urgent Care – Westwood", address: "10921 Kinross Ave, Los Angeles, CA 90024", phone: "(310) 208-7800", hours: "Mon–Sun 8am–8pm", mapsQuery: "10921+Kinross+Ave+Los+Angeles+CA+90024" },
      { name: "Patient Care Clinic – Koreatown", address: "3550 Wilshire Blvd Ste 110, Los Angeles, CA 90010", phone: "(213) 380-4400", hours: "Mon–Fri 9am–7pm, Sat–Sun 10am–5pm", mapsQuery: "3550+Wilshire+Blvd+Los+Angeles+CA+90010" },
      { name: "MedPost Urgent Care – Culver City", address: "5906 S Sepulveda Blvd, Culver City, CA 90230", phone: "(310) 397-4300", hours: "Mon–Sun 8am–8pm", mapsQuery: "5906+S+Sepulveda+Blvd+Culver+City+CA+90230" },
      { name: "Concentra Urgent Care – Van Nuys", address: "7256 Van Nuys Blvd, Van Nuys, CA 91405", phone: "(818) 782-3200", hours: "Mon–Fri 8am–5pm, Sat 8am–12pm", mapsQuery: "7256+Van+Nuys+Blvd+Van+Nuys+CA+91405" },
      { name: "Dignity Health GoHealth – Silver Lake", address: "2727 Hyperion Ave, Los Angeles, CA 90027", phone: "(323) 522-9100", hours: "Mon–Sun 8am–8pm", mapsQuery: "2727+Hyperion+Ave+Los+Angeles+CA+90027" },
      { name: "Prime Urgent Care – Mid-City", address: "5041 W Pico Blvd, Los Angeles, CA 90019", phone: "(323) 937-5000", hours: "Mon–Sun 9am–9pm", mapsQuery: "5041+W+Pico+Blvd+Los+Angeles+CA+90019" },
    ],
  },
  {
    slug: "san-diego",
    name: "San Diego",
    listings: [
      { name: "Scripps Urgent Care – Hillcrest", address: "1741 Washington Pl, San Diego, CA 92103", phone: "(619) 543-7500", hours: "Mon–Sun 8am–8pm", mapsQuery: "1741+Washington+Pl+San+Diego+CA+92103" },
      { name: "AFC Urgent Care – Mission Valley", address: "2939 El Cajon Blvd, San Diego, CA 92104", phone: "(619) 584-4100", hours: "Mon–Sun 8am–8pm", mapsQuery: "2939+El+Cajon+Blvd+San+Diego+CA+92104" },
      { name: "CityMD Urgent Care – Pacific Beach", address: "1201 Garnet Ave, San Diego, CA 92109", phone: "(858) 270-2273", hours: "Mon–Sun 8am–10pm", mapsQuery: "1201+Garnet+Ave+San+Diego+CA+92109" },
      { name: "Concentra Urgent Care – Kearny Mesa", address: "5765 Kearny Villa Rd, San Diego, CA 92123", phone: "(858) 505-8100", hours: "Mon–Fri 8am–5pm", mapsQuery: "5765+Kearny+Villa+Rd+San+Diego+CA+92123" },
      { name: "Sharp Rees-Stealy Urgent Care – Downtown", address: "301 W Cedar St, San Diego, CA 92101", phone: "(619) 233-7000", hours: "Mon–Fri 7am–9pm, Sat–Sun 8am–5pm", mapsQuery: "301+W+Cedar+St+San+Diego+CA+92101" },
      { name: "Urgent Care Extra – North Park", address: "3015 University Ave, San Diego, CA 92104", phone: "(619) 692-0066", hours: "Mon–Sun 9am–9pm", mapsQuery: "3015+University+Ave+San+Diego+CA+92104" },
      { name: "MedPost Urgent Care – Chula Vista", address: "870 Eastlake Pkwy, Chula Vista, CA 91914", phone: "(619) 421-2300", hours: "Mon–Sun 8am–8pm", mapsQuery: "870+Eastlake+Pkwy+Chula+Vista+CA+91914" },
      { name: "GoHealth Urgent Care – UTC", address: "8657 Villa La Jolla Dr, La Jolla, CA 92037", phone: "(858) 550-7500", hours: "Mon–Sun 8am–8pm", mapsQuery: "8657+Villa+La+Jolla+Dr+La+Jolla+CA+92037" },
      { name: "Neighborhood Urgent Care – El Cajon", address: "400 N Magnolia Ave, El Cajon, CA 92020", phone: "(619) 441-3300", hours: "Mon–Sun 8am–8pm", mapsQuery: "400+N+Magnolia+Ave+El+Cajon+CA+92020" },
      { name: "Primary Care & Urgent Care – National City", address: "1300 Highland Ave, National City, CA 91950", phone: "(619) 477-6700", hours: "Mon–Fri 8am–7pm, Sat 9am–5pm", mapsQuery: "1300+Highland+Ave+National+City+CA+91950" },
    ],
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    listings: [
      { name: "NextCare Urgent Care – Camelback", address: "5020 E Camelback Rd, Phoenix, AZ 85018", phone: "(602) 840-9191", hours: "Mon–Sun 8am–8pm", mapsQuery: "5020+E+Camelback+Rd+Phoenix+AZ+85018" },
      { name: "AFC Urgent Care – Midtown Phoenix", address: "3003 N Central Ave Ste 120, Phoenix, AZ 85012", phone: "(602) 252-2273", hours: "Mon–Sun 8am–8pm", mapsQuery: "3003+N+Central+Ave+Phoenix+AZ+85012" },
      { name: "Banner Urgent Care – North Phoenix", address: "23410 N 19th Ave, Phoenix, AZ 85027", phone: "(623) 434-3300", hours: "Mon–Sun 7am–9pm", mapsQuery: "23410+N+19th+Ave+Phoenix+AZ+85027" },
      { name: "Dignity Health GoHealth – Ahwatukee", address: "4717 E Warner Rd, Phoenix, AZ 85044", phone: "(480) 706-0800", hours: "Mon–Sun 8am–8pm", mapsQuery: "4717+E+Warner+Rd+Phoenix+AZ+85044" },
      { name: "Urgent Care Extra – Tempe", address: "1355 W Elliot Rd, Tempe, AZ 85284", phone: "(480) 782-4800", hours: "Mon–Sun 8am–10pm", mapsQuery: "1355+W+Elliot+Rd+Tempe+AZ+85284" },
      { name: "Concentra Urgent Care – Phoenix East", address: "2415 E Thomas Rd, Phoenix, AZ 85016", phone: "(602) 956-7500", hours: "Mon–Fri 8am–5pm", mapsQuery: "2415+E+Thomas+Rd+Phoenix+AZ+85016" },
      { name: "Scottsdale Urgent Care – Old Town", address: "7425 E Shea Blvd, Scottsdale, AZ 85260", phone: "(480) 951-3800", hours: "Mon–Sun 8am–8pm", mapsQuery: "7425+E+Shea+Blvd+Scottsdale+AZ+85260" },
      { name: "MedExpress Urgent Care – Chandler", address: "1175 N Arizona Ave, Chandler, AZ 85225", phone: "(480) 963-0500", hours: "Mon–Fri 8am–8pm, Sat–Sun 9am–5pm", mapsQuery: "1175+N+Arizona+Ave+Chandler+AZ+85225" },
      { name: "Avance Care – Gilbert", address: "2680 S Val Vista Dr, Gilbert, AZ 85295", phone: "(480) 558-9500", hours: "Mon–Sun 8am–8pm", mapsQuery: "2680+S+Val+Vista+Dr+Gilbert+AZ+85295" },
      { name: "Premier Family Medical Urgent Care – Glendale", address: "6036 W Bell Rd, Glendale, AZ 85308", phone: "(623) 486-0088", hours: "Mon–Sun 8am–8pm", mapsQuery: "6036+W+Bell+Rd+Glendale+AZ+85308" },
    ],
  },
  {
    slug: "dallas",
    name: "Dallas",
    listings: [
      { name: "CareNow Urgent Care – Uptown", address: "3500 Oak Lawn Ave, Dallas, TX 75219", phone: "(214) 528-6700", hours: "Mon–Sun 8am–9pm", mapsQuery: "3500+Oak+Lawn+Ave+Dallas+TX+75219" },
      { name: "NextCare Urgent Care – Deep Ellum", address: "3107 Main St, Dallas, TX 75226", phone: "(214) 821-8200", hours: "Mon–Sun 8am–8pm", mapsQuery: "3107+Main+St+Dallas+TX+75226" },
      { name: "AFC Urgent Care – North Dallas", address: "6440 N Central Expy Ste 100, Dallas, TX 75206", phone: "(214) 363-9700", hours: "Mon–Sun 8am–8pm", mapsQuery: "6440+N+Central+Expy+Dallas+TX+75206" },
      { name: "Concentra Urgent Care – Stemmons", address: "2350 N Stemmons Fwy, Dallas, TX 75207", phone: "(214) 630-2060", hours: "Mon–Fri 8am–5pm", mapsQuery: "2350+N+Stemmons+Fwy+Dallas+TX+75207" },
      { name: "UT Southwestern Urgent Care – Plano", address: "6201 W Parker Rd Ste 100, Plano, TX 75093", phone: "(972) 596-1400", hours: "Mon–Fri 8am–8pm, Sat 9am–5pm", mapsQuery: "6201+W+Parker+Rd+Plano+TX+75093" },
      { name: "Baylor Scott & White Urgent Care – Frisco", address: "4500 Preston Rd, Frisco, TX 75034", phone: "(972) 668-4000", hours: "Mon–Sun 7am–9pm", mapsQuery: "4500+Preston+Rd+Frisco+TX+75034" },
      { name: "MedSpring Urgent Care – Lakewood", address: "2235 Abrams Rd, Dallas, TX 75214", phone: "(214) 826-3700", hours: "Mon–Sun 8am–8pm", mapsQuery: "2235+Abrams+Rd+Dallas+TX+75214" },
      { name: "GoHealth Urgent Care – Irving", address: "3938 W Airport Fwy, Irving, TX 75062", phone: "(972) 570-7900", hours: "Mon–Sun 8am–8pm", mapsQuery: "3938+W+Airport+Fwy+Irving+TX+75062" },
      { name: "WellMed Urgent Care – Garland", address: "5001 Naaman Forest Blvd, Garland, TX 75040", phone: "(972) 381-3400", hours: "Mon–Fri 8am–7pm, Sat 9am–3pm", mapsQuery: "5001+Naaman+Forest+Blvd+Garland+TX+75040" },
      { name: "Texas Health Urgent Care – Arlington", address: "3400 Matlock Rd, Arlington, TX 76015", phone: "(817) 472-8000", hours: "Mon–Sun 8am–8pm", mapsQuery: "3400+Matlock+Rd+Arlington+TX+76015" },
    ],
  },
  {
    slug: "houston",
    name: "Houston",
    listings: [
      { name: "CareNow Urgent Care – Montrose", address: "2400 Mid Ln, Houston, TX 77027", phone: "(713) 961-5551", hours: "Mon–Sun 8am–9pm", mapsQuery: "2400+Mid+Ln+Houston+TX+77027" },
      { name: "AFC Urgent Care – Midtown Houston", address: "3606 Main St, Houston, TX 77002", phone: "(713) 528-1111", hours: "Mon–Sun 8am–8pm", mapsQuery: "3606+Main+St+Houston+TX+77002" },
      { name: "Memorial Hermann Urgent Care – The Woodlands", address: "19513 I-45 N, The Woodlands, TX 77385", phone: "(936) 271-5100", hours: "Mon–Sun 7am–9pm", mapsQuery: "19513+I-45+N+The+Woodlands+TX+77385" },
      { name: "Concentra Urgent Care – Greenway Plaza", address: "3715 Westheimer Rd, Houston, TX 77027", phone: "(713) 993-9100", hours: "Mon–Fri 8am–5pm", mapsQuery: "3715+Westheimer+Rd+Houston+TX+77027" },
      { name: "NextCare Urgent Care – Galleria", address: "5000 Westheimer Rd Ste 200, Houston, TX 77056", phone: "(713) 621-7900", hours: "Mon–Sun 8am–8pm", mapsQuery: "5000+Westheimer+Rd+Houston+TX+77056" },
      { name: "Houston Methodist Urgent Care – Sugar Land", address: "16521 US-59, Sugar Land, TX 77479", phone: "(281) 565-4800", hours: "Mon–Sun 8am–8pm", mapsQuery: "16521+US-59+Sugar+Land+TX+77479" },
      { name: "Kelsey-Seybold Urgent Care – Spring", address: "1990 Spring Stuebner Rd, Spring, TX 77389", phone: "(281) 364-7900", hours: "Mon–Fri 8am–8pm, Sat–Sun 9am–5pm", mapsQuery: "1990+Spring+Stuebner+Rd+Spring+TX+77389" },
      { name: "FastMed Urgent Care – Katy", address: "25350 Katy Fwy, Katy, TX 77494", phone: "(281) 644-0600", hours: "Mon–Sun 8am–8pm", mapsQuery: "25350+Katy+Fwy+Katy+TX+77494" },
      { name: "InstaFix Urgent Care – Pearland", address: "11200 Broadway St, Pearland, TX 77584", phone: "(281) 997-7400", hours: "Mon–Sun 8am–9pm", mapsQuery: "11200+Broadway+St+Pearland+TX+77584" },
      { name: "Texas Emergency Care Center – Heights", address: "8920 Katy Fwy, Houston, TX 77024", phone: "(713) 465-6200", hours: "Mon–Sun 8am–10pm", mapsQuery: "8920+Katy+Fwy+Houston+TX+77024" },
    ],
  },
  {
    slug: "miami",
    name: "Miami",
    listings: [
      { name: "Baptist Health Urgent Care – Coral Gables", address: "2601 S Douglas Rd, Coral Gables, FL 33134", phone: "(305) 444-8181", hours: "Mon–Sun 8am–8pm", mapsQuery: "2601+S+Douglas+Rd+Coral+Gables+FL+33134" },
      { name: "CityMD Urgent Care – Brickell", address: "1200 Brickell Ave, Miami, FL 33131", phone: "(305) 285-2500", hours: "Mon–Sun 8am–10pm", mapsQuery: "1200+Brickell+Ave+Miami+FL+33131" },
      { name: "AFC Urgent Care – Wynwood", address: "2750 NW 3rd Ave, Miami, FL 33127", phone: "(305) 576-2700", hours: "Mon–Sun 8am–8pm", mapsQuery: "2750+NW+3rd+Ave+Miami+FL+33127" },
      { name: "Jackson Urgent Care – Hialeah", address: "1600 W 68th St, Hialeah, FL 33014", phone: "(305) 558-5000", hours: "Mon–Fri 8am–8pm, Sat–Sun 9am–5pm", mapsQuery: "1600+W+68th+St+Hialeah+FL+33014" },
      { name: "Concentra Urgent Care – Doral", address: "8395 NW 12th St, Doral, FL 33126", phone: "(305) 593-9400", hours: "Mon–Fri 8am–5pm", mapsQuery: "8395+NW+12th+St+Doral+FL+33126" },
      { name: "Medcare Urgent Care – South Beach", address: "420 Lincoln Rd, Miami Beach, FL 33139", phone: "(305) 538-1818", hours: "Mon–Sun 9am–9pm", mapsQuery: "420+Lincoln+Rd+Miami+Beach+FL+33139" },
      { name: "Nicklaus Children's Urgent Care – Kendall", address: "11750 Bird Rd, Miami, FL 33175", phone: "(786) 624-2500", hours: "Mon–Sun 8am–8pm", mapsQuery: "11750+Bird+Rd+Miami+FL+33175" },
      { name: "MD Now Urgent Care – Aventura", address: "19501 Biscayne Blvd, Aventura, FL 33180", phone: "(305) 935-9500", hours: "Mon–Sun 8am–8pm", mapsQuery: "19501+Biscayne+Blvd+Aventura+FL+33180" },
      { name: "MedExpress Urgent Care – Homestead", address: "2595 NE 10th Ct, Homestead, FL 33033", phone: "(305) 246-0071", hours: "Mon–Sun 8am–8pm", mapsQuery: "2595+NE+10th+Ct+Homestead+FL+33033" },
      { name: "StatCare Urgent Care – Cutler Bay", address: "20801 SW 127th Ave, Cutler Bay, FL 33189", phone: "(305) 259-7700", hours: "Mon–Sun 8am–9pm", mapsQuery: "20801+SW+127th+Ave+Cutler+Bay+FL+33189" },
    ],
  },
  {
    slug: "chicago",
    name: "Chicago",
    listings: [
      { name: "Northwestern Medicine Immediate Care – Gold Coast", address: "680 N Lake Shore Dr, Chicago, IL 60611", phone: "(312) 926-2000", hours: "Mon–Sun 8am–8pm", mapsQuery: "680+N+Lake+Shore+Dr+Chicago+IL+60611" },
      { name: "Concentra Urgent Care – River North", address: "625 N Michigan Ave Ste 100, Chicago, IL 60611", phone: "(312) 337-7766", hours: "Mon–Fri 8am–5pm", mapsQuery: "625+N+Michigan+Ave+Chicago+IL+60611" },
      { name: "AFC Urgent Care – Wicker Park", address: "1500 N Western Ave, Chicago, IL 60622", phone: "(773) 489-2273", hours: "Mon–Sun 8am–8pm", mapsQuery: "1500+N+Western+Ave+Chicago+IL+60622" },
      { name: "Rush Immediate Care – Streeterville", address: "1725 W Harrison St, Chicago, IL 60612", phone: "(312) 942-5000", hours: "Mon–Fri 8am–8pm, Sat–Sun 9am–5pm", mapsQuery: "1725+W+Harrison+St+Chicago+IL+60612" },
      { name: "Advocate Immediate Care – Hyde Park", address: "1525 E 53rd St, Chicago, IL 60615", phone: "(773) 667-6800", hours: "Mon–Sun 8am–8pm", mapsQuery: "1525+E+53rd+St+Chicago+IL+60615" },
      { name: "MedSpring Urgent Care – Lincoln Park", address: "939 W North Ave, Chicago, IL 60610", phone: "(312) 255-0100", hours: "Mon–Sun 8am–8pm", mapsQuery: "939+W+North+Ave+Chicago+IL+60610" },
      { name: "Insight Medical Partners – Lakeview", address: "3525 N Halsted St, Chicago, IL 60657", phone: "(773) 935-4500", hours: "Mon–Sun 9am–9pm", mapsQuery: "3525+N+Halsted+St+Chicago+IL+60657" },
      { name: "GoHealth Urgent Care – Evanston", address: "1603 Orrington Ave, Evanston, IL 60201", phone: "(847) 905-6800", hours: "Mon–Sun 8am–8pm", mapsQuery: "1603+Orrington+Ave+Evanston+IL+60201" },
      { name: "Immediate Care of Illinois – Naperville", address: "1020 75th St, Naperville, IL 60565", phone: "(630) 983-7300", hours: "Mon–Sun 8am–8pm", mapsQuery: "1020+75th+St+Naperville+IL+60565" },
      { name: "FastMed Urgent Care – Schaumburg", address: "1425 E Golf Rd, Schaumburg, IL 60173", phone: "(847) 517-8700", hours: "Mon–Sun 8am–9pm", mapsQuery: "1425+E+Golf+Rd+Schaumburg+IL+60173" },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    listings: [
      { name: "CityMD Urgent Care – Midtown East", address: "317 E 34th St, New York, NY 10016", phone: "(212) 252-6060", hours: "Mon–Sun 8am–10pm", mapsQuery: "317+E+34th+St+New+York+NY+10016" },
      { name: "NYU Langone Orthopedic Urgent Care – UES", address: "333 E 38th St, New York, NY 10016", phone: "(646) 754-2100", hours: "Mon–Fri 9am–5pm", mapsQuery: "333+E+38th+St+New+York+NY+10016" },
      { name: "Concentra Urgent Care – Chelsea", address: "122 W 26th St, New York, NY 10001", phone: "(212) 633-1177", hours: "Mon–Fri 8am–5pm", mapsQuery: "122+W+26th+St+New+York+NY+10001" },
      { name: "AFC Urgent Care – Upper West Side", address: "2920 Broadway, New York, NY 10025", phone: "(212) 222-7396", hours: "Mon–Sun 8am–8pm", mapsQuery: "2920+Broadway+New+York+NY+10025" },
      { name: "GoHealth Urgent Care – Brooklyn Heights", address: "100 Montague St, Brooklyn, NY 11201", phone: "(718) 625-6060", hours: "Mon–Sun 8am–8pm", mapsQuery: "100+Montague+St+Brooklyn+NY+11201" },
      { name: "ProHEALTH Urgent Care – Forest Hills", address: "10818 Queens Blvd, Forest Hills, NY 11375", phone: "(718) 261-8200", hours: "Mon–Sun 8am–8pm", mapsQuery: "10818+Queens+Blvd+Forest+Hills+NY+11375" },
      { name: "StatMD Urgent Care – Harlem", address: "3959 Broadway, New York, NY 10032", phone: "(212) 923-3030", hours: "Mon–Sun 9am–9pm", mapsQuery: "3959+Broadway+New+York+NY+10032" },
      { name: "Northwell Health GoHealth – Astoria", address: "32-44 31st St, Astoria, NY 11106", phone: "(718) 777-3500", hours: "Mon–Sun 8am–8pm", mapsQuery: "32-44+31st+St+Astoria+NY+11106" },
      { name: "CityMD Urgent Care – Park Slope", address: "225 Flatbush Ave, Brooklyn, NY 11217", phone: "(718) 783-1515", hours: "Mon–Sun 8am–10pm", mapsQuery: "225+Flatbush+Ave+Brooklyn+NY+11217" },
      { name: "PM Pediatric Urgent Care – Bayside", address: "211-33 26th Ave, Bayside, NY 11360", phone: "(718) 423-0400", hours: "Mon–Sun 12pm–10pm", mapsQuery: "211-33+26th+Ave+Bayside+NY+11360" },
    ],
  },
  {
    slug: "seattle",
    name: "Seattle",
    listings: [
      { name: "UW Medicine Urgent Care – Roosevelt", address: "4245 Roosevelt Way NE, Seattle, WA 98105", phone: "(206) 598-6100", hours: "Mon–Sun 8am–8pm", mapsQuery: "4245+Roosevelt+Way+NE+Seattle+WA+98105" },
      { name: "Swedish Urgent Care – First Hill", address: "747 Broadway, Seattle, WA 98122", phone: "(206) 386-2500", hours: "Mon–Sun 8am–8pm", mapsQuery: "747+Broadway+Seattle+WA+98122" },
      { name: "ZoomCare Urgent Care – Capitol Hill", address: "212 Broadway E, Seattle, WA 98102", phone: "(206) 971-8000", hours: "Mon–Sun 8am–10pm", mapsQuery: "212+Broadway+E+Seattle+WA+98102" },
      { name: "AFC Urgent Care – Ballard", address: "5409 Ballard Ave NW, Seattle, WA 98107", phone: "(206) 789-0700", hours: "Mon–Sun 8am–8pm", mapsQuery: "5409+Ballard+Ave+NW+Seattle+WA+98107" },
      { name: "Concentra Urgent Care – SoDo", address: "1401 4th Ave S, Seattle, WA 98134", phone: "(206) 382-8900", hours: "Mon–Fri 8am–5pm", mapsQuery: "1401+4th+Ave+S+Seattle+WA+98134" },
      { name: "Overlake Urgent Care – Bellevue", address: "1135 116th Ave NE, Bellevue, WA 98004", phone: "(425) 688-5000", hours: "Mon–Sun 8am–8pm", mapsQuery: "1135+116th+Ave+NE+Bellevue+WA+98004" },
      { name: "MultiCare Indigo Urgent Care – Redmond", address: "8200 164th Ave NE, Redmond, WA 98052", phone: "(425) 861-3100", hours: "Mon–Sun 8am–8pm", mapsQuery: "8200+164th+Ave+NE+Redmond+WA+98052" },
      { name: "GoHealth Urgent Care – Kent", address: "25630 104th Ave SE, Kent, WA 98030", phone: "(253) 852-8200", hours: "Mon–Sun 8am–8pm", mapsQuery: "25630+104th+Ave+SE+Kent+WA+98030" },
      { name: "EvergreenHealth Urgent Care – Kirkland", address: "12303 NE 130th Ln, Kirkland, WA 98034", phone: "(425) 899-2000", hours: "Mon–Sun 8am–8pm", mapsQuery: "12303+NE+130th+Ln+Kirkland+WA+98034" },
      { name: "ZoomCare Urgent Care – Fremont", address: "3411 Fremont Ave N, Seattle, WA 98103", phone: "(206) 971-8000", hours: "Mon–Sun 8am–10pm", mapsQuery: "3411+Fremont+Ave+N+Seattle+WA+98103" },
    ],
  },
  {
    slug: "denver",
    name: "Denver",
    listings: [
      { name: "UCHealth Urgent Care – Cherry Creek", address: "2930 E 3rd Ave, Denver, CO 80206", phone: "(720) 848-7900", hours: "Mon–Sun 8am–8pm", mapsQuery: "2930+E+3rd+Ave+Denver+CO+80206" },
      { name: "CareNow Urgent Care – Downtown Denver", address: "1551 Blake St, Denver, CO 80202", phone: "(303) 595-0200", hours: "Mon–Sun 8am–9pm", mapsQuery: "1551+Blake+St+Denver+CO+80202" },
      { name: "AFC Urgent Care – Capitol Hill", address: "1400 E 18th Ave, Denver, CO 80218", phone: "(303) 830-0900", hours: "Mon–Sun 8am–8pm", mapsQuery: "1400+E+18th+Ave+Denver+CO+80218" },
      { name: "Concentra Urgent Care – Globeville", address: "4860 Washington St, Denver, CO 80216", phone: "(303) 292-2980", hours: "Mon–Fri 8am–5pm", mapsQuery: "4860+Washington+St+Denver+CO+80216" },
      { name: "NextCare Urgent Care – Aurora", address: "14221 E Alameda Ave, Aurora, CO 80012", phone: "(303) 750-8000", hours: "Mon–Sun 8am–8pm", mapsQuery: "14221+E+Alameda+Ave+Aurora+CO+80012" },
      { name: "SCL Health Urgent Care – Lakewood", address: "7200 W 20th Ave, Lakewood, CO 80214", phone: "(303) 239-6900", hours: "Mon–Sun 8am–8pm", mapsQuery: "7200+W+20th+Ave+Lakewood+CO+80214" },
      { name: "GoHealth Urgent Care – Highlands", address: "3440 W 38th Ave, Denver, CO 80211", phone: "(303) 455-4545", hours: "Mon–Sun 8am–8pm", mapsQuery: "3440+W+38th+Ave+Denver+CO+80211" },
      { name: "HealthONE Urgent Care – Lone Tree", address: "9995 Park Meadows Dr, Lone Tree, CO 80124", phone: "(303) 649-0700", hours: "Mon–Sun 8am–8pm", mapsQuery: "9995+Park+Meadows+Dr+Lone+Tree+CO+80124" },
      { name: "MedExpress Urgent Care – Westminster", address: "7380 W 52nd Ave, Westminster, CO 80212", phone: "(303) 422-4900", hours: "Mon–Sun 8am–8pm", mapsQuery: "7380+W+52nd+Ave+Westminster+CO+80212" },
      { name: "Urgent Care of the Rockies – Englewood", address: "3595 S Teller St, Lakewood, CO 80235", phone: "(303) 988-4200", hours: "Mon–Sun 8am–9pm", mapsQuery: "3595+S+Teller+St+Lakewood+CO+80235" },
    ],
  },
  {
    slug: "las-vegas",
    name: "Las Vegas",
    listings: [
      { name: "Dignity Health GoHealth – The Strip", address: "3325 S Las Vegas Blvd Ste 105, Las Vegas, NV 89109", phone: "(702) 369-2200", hours: "Mon–Sun 8am–10pm", mapsQuery: "3325+S+Las+Vegas+Blvd+Las+Vegas+NV+89109" },
      { name: "AFC Urgent Care – Summerlin", address: "2620 Regatta Dr, Las Vegas, NV 89128", phone: "(702) 838-7500", hours: "Mon–Sun 8am–8pm", mapsQuery: "2620+Regatta+Dr+Las+Vegas+NV+89128" },
      { name: "Concentra Urgent Care – Downtown Las Vegas", address: "500 S Grand Central Pkwy, Las Vegas, NV 89106", phone: "(702) 387-9100", hours: "Mon–Fri 8am–5pm", mapsQuery: "500+S+Grand+Central+Pkwy+Las+Vegas+NV+89106" },
      { name: "Valley Health Urgent Care – Henderson", address: "9305 S Eastern Ave, Henderson, NV 89015", phone: "(702) 558-4000", hours: "Mon–Sun 8am–8pm", mapsQuery: "9305+S+Eastern+Ave+Henderson+NV+89015" },
      { name: "NextCare Urgent Care – North Las Vegas", address: "4840 N Pecos Rd, North Las Vegas, NV 89115", phone: "(702) 438-7700", hours: "Mon–Sun 8am–8pm", mapsQuery: "4840+N+Pecos+Rd+North+Las+Vegas+NV+89115" },
      { name: "FastMed Urgent Care – Green Valley", address: "2885 St Rose Pkwy, Henderson, NV 89052", phone: "(702) 617-2300", hours: "Mon–Sun 8am–8pm", mapsQuery: "2885+St+Rose+Pkwy+Henderson+NV+89052" },
      { name: "MD Urgent Care – Spring Valley", address: "4550 S Maryland Pkwy, Las Vegas, NV 89119", phone: "(702) 736-7800", hours: "Mon–Sun 8am–9pm", mapsQuery: "4550+S+Maryland+Pkwy+Las+Vegas+NV+89119" },
      { name: "Intermountain Urgent Care – Boulder City", address: "801 Adams Blvd, Boulder City, NV 89005", phone: "(702) 293-4111", hours: "Mon–Fri 8am–6pm, Sat 9am–3pm", mapsQuery: "801+Adams+Blvd+Boulder+City+NV+89005" },
      { name: "Primary Care Plus – Enterprise", address: "7955 S Rainbow Blvd, Las Vegas, NV 89139", phone: "(702) 614-0700", hours: "Mon–Sun 8am–8pm", mapsQuery: "7955+S+Rainbow+Blvd+Las+Vegas+NV+89139" },
      { name: "MedNow Urgent Care – Centennial Hills", address: "6850 N Durango Dr, Las Vegas, NV 89149", phone: "(702) 562-6000", hours: "Mon–Sun 8am–8pm", mapsQuery: "6850+N+Durango+Dr+Las+Vegas+NV+89149" },
    ],
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    listings: [
      { name: "Emory Urgent Care – Midtown", address: "1365 Clifton Rd NE, Atlanta, GA 30322", phone: "(404) 778-7777", hours: "Mon–Sun 8am–8pm", mapsQuery: "1365+Clifton+Rd+NE+Atlanta+GA+30322" },
      { name: "AFC Urgent Care – Buckhead", address: "3098 Piedmont Rd NE, Atlanta, GA 30305", phone: "(404) 816-8300", hours: "Mon–Sun 8am–8pm", mapsQuery: "3098+Piedmont+Rd+NE+Atlanta+GA+30305" },
      { name: "WellStreet Urgent Care – Virginia-Highland", address: "1039 N Highland Ave NE, Atlanta, GA 30306", phone: "(404) 892-9355", hours: "Mon–Sun 8am–8pm", mapsQuery: "1039+N+Highland+Ave+NE+Atlanta+GA+30306" },
      { name: "Concentra Urgent Care – Perimeter", address: "4994 Lower Roswell Rd, Marietta, GA 30068", phone: "(770) 565-7777", hours: "Mon–Fri 8am–5pm", mapsQuery: "4994+Lower+Roswell+Rd+Marietta+GA+30068" },
      { name: "Piedmont Urgent Care – Decatur", address: "2100 Henderson Mill Rd NE, Atlanta, GA 30345", phone: "(770) 270-4700", hours: "Mon–Sun 8am–8pm", mapsQuery: "2100+Henderson+Mill+Rd+NE+Atlanta+GA+30345" },
      { name: "NextCare Urgent Care – Smyrna", address: "2851 Spring Hill Pkwy, Smyrna, GA 30080", phone: "(770) 433-6000", hours: "Mon–Sun 8am–8pm", mapsQuery: "2851+Spring+Hill+Pkwy+Smyrna+GA+30080" },
      { name: "GoHealth Urgent Care – Sandy Springs", address: "6600 Roswell Rd, Sandy Springs, GA 30328", phone: "(770) 399-3600", hours: "Mon–Sun 8am–8pm", mapsQuery: "6600+Roswell+Rd+Sandy+Springs+GA+30328" },
      { name: "Instacare Urgent Care – Norcross", address: "5365 Jimmy Carter Blvd, Norcross, GA 30093", phone: "(770) 263-3300", hours: "Mon–Sun 8am–9pm", mapsQuery: "5365+Jimmy+Carter+Blvd+Norcross+GA+30093" },
      { name: "Wellstar Urgent Care – Alpharetta", address: "5780 State Bridge Rd, Alpharetta, GA 30022", phone: "(678) 990-5000", hours: "Mon–Sun 8am–8pm", mapsQuery: "5780+State+Bridge+Rd+Alpharetta+GA+30022" },
      { name: "Peachtree Immediate Care – Duluth", address: "3750 Club Dr, Duluth, GA 30096", phone: "(770) 623-2273", hours: "Mon–Sun 8am–8pm", mapsQuery: "3750+Club+Dr+Duluth+GA+30096" },
    ],
  },
  {
    slug: "orlando",
    name: "Orlando",
    listings: [
      { name: "AdventHealth Centra Care – Sand Lake", address: "8090 Turkey Lake Rd, Orlando, FL 32819", phone: "(407) 351-6682", hours: "Mon–Sun 8am–8pm", mapsQuery: "8090+Turkey+Lake+Rd+Orlando+FL+32819" },
      { name: "AFC Urgent Care – International Drive", address: "6001 Vineland Rd Ste 130, Orlando, FL 32819", phone: "(407) 352-7462", hours: "Mon–Sun 8am–8pm", mapsQuery: "6001+Vineland+Rd+Orlando+FL+32819" },
      { name: "MD Now Urgent Care – Downtown Orlando", address: "100 W Anderson St, Orlando, FL 32801", phone: "(407) 423-6633", hours: "Mon–Fri 8am–8pm, Sat–Sun 9am–5pm", mapsQuery: "100+W+Anderson+St+Orlando+FL+32801" },
      { name: "Concentra Urgent Care – Pine Hills", address: "5012 W Colonial Dr, Orlando, FL 32808", phone: "(407) 296-1000", hours: "Mon–Fri 8am–5pm", mapsQuery: "5012+W+Colonial+Dr+Orlando+FL+32808" },
      { name: "NextCare Urgent Care – Kissimmee", address: "2310 E Irlo Bronson Memorial Hwy, Kissimmee, FL 34744", phone: "(407) 932-1977", hours: "Mon–Sun 8am–8pm", mapsQuery: "2310+E+Irlo+Bronson+Memorial+Hwy+Kissimmee+FL+34744" },
      { name: "MedExpress Urgent Care – Lake Nona", address: "13700 Narcoossee Rd, Orlando, FL 32832", phone: "(407) 852-3100", hours: "Mon–Sun 8am–8pm", mapsQuery: "13700+Narcoossee+Rd+Orlando+FL+32832" },
      { name: "FastMed Urgent Care – Apopka", address: "1520 W Orange Blossom Trl, Apopka, FL 32712", phone: "(407) 889-8300", hours: "Mon–Sun 8am–8pm", mapsQuery: "1520+W+Orange+Blossom+Trl+Apopka+FL+32712" },
      { name: "OrthoClinic Urgent Care – Winter Park", address: "1095 W Morse Blvd, Winter Park, FL 32789", phone: "(407) 629-1227", hours: "Mon–Fri 8am–6pm, Sat 9am–3pm", mapsQuery: "1095+W+Morse+Blvd+Winter+Park+FL+32789" },
      { name: "Altamonte Urgent Care – Altamonte Springs", address: "1000 Montgomery Rd, Altamonte Springs, FL 32714", phone: "(407) 869-0505", hours: "Mon–Sun 8am–8pm", mapsQuery: "1000+Montgomery+Rd+Altamonte+Springs+FL+32714" },
      { name: "Stat MedCare – Sanford", address: "3600 S Orlando Dr, Sanford, FL 32773", phone: "(407) 323-2100", hours: "Mon–Sun 8am–9pm", mapsQuery: "3600+S+Orlando+Dr+Sanford+FL+32773" },
    ],
  },
  {
    slug: "tampa",
    name: "Tampa",
    listings: [
      { name: "BayCare Urgent Care – Ybor City", address: "1901 E 7th Ave, Tampa, FL 33605", phone: "(813) 241-4700", hours: "Mon–Sun 8am–8pm", mapsQuery: "1901+E+7th+Ave+Tampa+FL+33605" },
      { name: "AFC Urgent Care – South Tampa", address: "2914 W Kennedy Blvd, Tampa, FL 33609", phone: "(813) 873-7400", hours: "Mon–Sun 8am–8pm", mapsQuery: "2914+W+Kennedy+Blvd+Tampa+FL+33609" },
      { name: "AdventHealth Centra Care – Brandon", address: "1051 W Lumsden Rd, Brandon, FL 33511", phone: "(813) 653-9001", hours: "Mon–Sun 8am–8pm", mapsQuery: "1051+W+Lumsden+Rd+Brandon+FL+33511" },
      { name: "Concentra Urgent Care – Westshore", address: "4500 W Cypress St, Tampa, FL 33607", phone: "(813) 282-9100", hours: "Mon–Fri 8am–5pm", mapsQuery: "4500+W+Cypress+St+Tampa+FL+33607" },
      { name: "MD Now Urgent Care – Clearwater", address: "2535 Gulf to Bay Blvd, Clearwater, FL 33765", phone: "(727) 797-7500", hours: "Mon–Sun 8am–8pm", mapsQuery: "2535+Gulf+to+Bay+Blvd+Clearwater+FL+33765" },
      { name: "NextCare Urgent Care – St. Pete", address: "3301 34th St N, St. Petersburg, FL 33713", phone: "(727) 323-1150", hours: "Mon–Sun 8am–8pm", mapsQuery: "3301+34th+St+N+St+Petersburg+FL+33713" },
      { name: "GoHealth Urgent Care – Wesley Chapel", address: "27209 Wesley Chapel Blvd, Wesley Chapel, FL 33544", phone: "(813) 994-8700", hours: "Mon–Sun 8am–8pm", mapsQuery: "27209+Wesley+Chapel+Blvd+Wesley+Chapel+FL+33544" },
      { name: "FastMed Urgent Care – Riverview", address: "11204 Causeway Blvd, Riverview, FL 33578", phone: "(813) 677-9411", hours: "Mon–Sun 8am–8pm", mapsQuery: "11204+Causeway+Blvd+Riverview+FL+33578" },
      { name: "Palm Urgent Care – New Tampa", address: "18900 Bruce B Downs Blvd, Tampa, FL 33647", phone: "(813) 907-1700", hours: "Mon–Sun 8am–9pm", mapsQuery: "18900+Bruce+B+Downs+Blvd+Tampa+FL+33647" },
      { name: "StatMed Urgent Care – Lutz", address: "2015 W Lutz Lake Fern Rd, Lutz, FL 33558", phone: "(813) 949-0900", hours: "Mon–Sun 8am–8pm", mapsQuery: "2015+W+Lutz+Lake+Fern+Rd+Lutz+FL+33558" },
    ],
  },
  {
    slug: "sacramento",
    name: "Sacramento",
    listings: [
      { name: "UC Davis Health Urgent Care – Midtown", address: "1515 19th St, Sacramento, CA 95814", phone: "(916) 734-5000", hours: "Mon–Sun 8am–8pm", mapsQuery: "1515+19th+St+Sacramento+CA+95814" },
      { name: "AFC Urgent Care – Arden-Arcade", address: "2029 Alta Arden Expy, Sacramento, CA 95825", phone: "(916) 480-1666", hours: "Mon–Sun 8am–8pm", mapsQuery: "2029+Alta+Arden+Expy+Sacramento+CA+95825" },
      { name: "Concentra Urgent Care – Downtown Sacramento", address: "1400 J St, Sacramento, CA 95814", phone: "(916) 442-7700", hours: "Mon–Fri 8am–5pm", mapsQuery: "1400+J+St+Sacramento+CA+95814" },
      { name: "Sutter Urgent Care – Roseville", address: "1160 Cirby Way, Roseville, CA 95678", phone: "(916) 781-9400", hours: "Mon–Sun 8am–8pm", mapsQuery: "1160+Cirby+Way+Roseville+CA+95678" },
      { name: "NextCare Urgent Care – Elk Grove", address: "8561 Bond Rd, Elk Grove, CA 95624", phone: "(916) 684-4900", hours: "Mon–Sun 8am–8pm", mapsQuery: "8561+Bond+Rd+Elk+Grove+CA+95624" },
      { name: "GoHealth Urgent Care – Folsom", address: "2615 E Bidwell St, Folsom, CA 95630", phone: "(916) 984-1100", hours: "Mon–Sun 8am–8pm", mapsQuery: "2615+E+Bidwell+St+Folsom+CA+95630" },
      { name: "MedExpress Urgent Care – Rancho Cordova", address: "3430 Sunrise Blvd, Rancho Cordova, CA 95742", phone: "(916) 631-0900", hours: "Mon–Sun 8am–8pm", mapsQuery: "3430+Sunrise+Blvd+Rancho+Cordova+CA+95742" },
      { name: "Dignity Health Urgent Care – Citrus Heights", address: "6800 Sunrise Blvd, Citrus Heights, CA 95610", phone: "(916) 727-5400", hours: "Mon–Sun 8am–8pm", mapsQuery: "6800+Sunrise+Blvd+Citrus+Heights+CA+95610" },
      { name: "River City Urgent Care – South Sacramento", address: "5001 Stockton Blvd, Sacramento, CA 95820", phone: "(916) 451-2200", hours: "Mon–Sun 8am–9pm", mapsQuery: "5001+Stockton+Blvd+Sacramento+CA+95820" },
      { name: "Fast Track Urgent Care – West Sacramento", address: "1433 Harbor Blvd, West Sacramento, CA 95691", phone: "(916) 371-8700", hours: "Mon–Sun 8am–8pm", mapsQuery: "1433+Harbor+Blvd+West+Sacramento+CA+95691" },
    ],
  },
  {
    slug: "san-jose",
    name: "San Jose",
    listings: [
      { name: "Kaiser Permanente Urgent Care – Santa Teresa", address: "6400 Penn Ave, San Jose, CA 95119", phone: "(408) 972-7000", hours: "Mon–Sun 8am–8pm", mapsQuery: "6400+Penn+Ave+San+Jose+CA+95119" },
      { name: "AFC Urgent Care – Downtown San Jose", address: "393 S 1st St, San Jose, CA 95113", phone: "(408) 293-1888", hours: "Mon–Sun 8am–8pm", mapsQuery: "393+S+1st+St+San+Jose+CA+95113" },
      { name: "Concentra Urgent Care – North San Jose", address: "2040 De La Cruz Blvd, Santa Clara, CA 95050", phone: "(408) 727-9700", hours: "Mon–Fri 8am–5pm", mapsQuery: "2040+De+La+Cruz+Blvd+Santa+Clara+CA+95050" },
      { name: "Palo Alto Medical Foundation Urgent Care – Sunnyvale", address: "455 S Mathilda Ave, Sunnyvale, CA 94086", phone: "(408) 739-6000", hours: "Mon–Sun 8am–8pm", mapsQuery: "455+S+Mathilda+Ave+Sunnyvale+CA+94086" },
      { name: "Good Samaritan Urgent Care – Almaden", address: "15891 Los Gatos-Almaden Rd, Los Gatos, CA 95032", phone: "(408) 356-8800", hours: "Mon–Sun 8am–8pm", mapsQuery: "15891+Los+Gatos-Almaden+Rd+Los+Gatos+CA+95032" },
      { name: "NextCare Urgent Care – Milpitas", address: "1635 N Milpitas Blvd, Milpitas, CA 95035", phone: "(408) 263-6700", hours: "Mon–Sun 8am–8pm", mapsQuery: "1635+N+Milpitas+Blvd+Milpitas+CA+95035" },
      { name: "GoHealth Urgent Care – Campbell", address: "1875 S Bascom Ave, Campbell, CA 95008", phone: "(408) 559-4900", hours: "Mon–Sun 8am–8pm", mapsQuery: "1875+S+Bascom+Ave+Campbell+CA+95008" },
      { name: "Dignity Health GoHealth – Morgan Hill", address: "17485 Monterey Rd, Morgan Hill, CA 95037", phone: "(408) 778-0900", hours: "Mon–Sun 8am–8pm", mapsQuery: "17485+Monterey+Rd+Morgan+Hill+CA+95037" },
      { name: "MedExpress Urgent Care – East San Jose", address: "2455 McKee Rd, San Jose, CA 95116", phone: "(408) 254-7000", hours: "Mon–Sun 8am–8pm", mapsQuery: "2455+McKee+Rd+San+Jose+CA+95116" },
      { name: "Valley Health Plan Urgent Care – Willow Glen", address: "1884 Lincoln Ave, San Jose, CA 95125", phone: "(408) 885-5000", hours: "Mon–Fri 8am–7pm, Sat 9am–5pm", mapsQuery: "1884+Lincoln+Ave+San+Jose+CA+95125" },
    ],
  },
];

export function getCityListings(slug: string): Listing[] | null {
  const city = cities.find((c) => c.slug === slug);
  return city ? city.listings : null;
}

export function getCityName(slug: string): string | null {
  const city = cities.find((c) => c.slug === slug);
  return city ? city.name : null;
}
