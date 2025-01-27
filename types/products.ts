

export interface Product{    
    _id:string;
    name:string;
    _type:"car";   
    image? : {
        assert : {
            _ref:string;
            _type:"image";

        }
   
    };

    pricePerDay:string;
    slug: {
        _type : "slug"
        current : string;
    };

}

   