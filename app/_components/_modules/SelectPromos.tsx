"use client";
import { PromosProps } from "@/src/interface/interface";

interface SelectPromosProps {
    promosAda : PromosProps[];
    promoId : number;
    setPromoId : (id: number) => void
}

export default function SelectPromos({promosAda, promoId, setPromoId} : SelectPromosProps) {

    return ( 
    <select value={promoId} onChange={(e) => {setPromoId(parseInt(e.target.value))}}>
            <option value="tous">Toutes les promos</option>
            {promosAda.map((promo) => {
                return (
                    <option key={promo.id} value={promo.id}>{promo.name}</option>
                )
            })}
            </select>
)
}