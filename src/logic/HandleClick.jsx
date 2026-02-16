



  
   export function handleClick(city,setOpen,setAddress,setCity,lung,weatherRef) {
      
    
      if (!city.trim()) {
        setOpen((i) => ({
          ...i,
          open: true,
          Title:
            lung === "en"
              ? "Please enter a city or country name"
              : "يرجى إدخال اسم المدينة أو الدولة",
          severity: "error",
        }));
        return;
      }
    
  
      setAddress(city);
      setCity("");
      setTimeout(() => {
       kes(weatherRef,lung,setOpen)
  }, 500);
      
    }
   
  
  
  
   export function kes(weatherRef,lung,setOpen) {
    if (weatherRef.current === "404") {
      setOpen((i) => ({
        ...i,
        open: true,
        Title:
          lung === "en"
            ? "City not found or not recognized"
            : "لم يتم العثور على المدينة أو لم يتم التعرف عليها",
        severity: "error",
      }));
    }
    if (weatherRef.current === 200) {
      setOpen((i) => ({
        ...i,
        open: true,
        Title:
          lung === "en"
            ? "Weather loaded successfully"
            : "تم تحميل حالة الطقس بنجاح",
        severity: "success",
      }));
    }
   }