"use client";
import { PromosProps } from "@/src/interface/interface";

import { SelectType } from "../ButtonHome";

interface SelectPromosProps {
    promosAda : PromosProps[];
    promoId : SelectType;
    setPromoId : (id: SelectType) => void
}

export default function SelectPromos({promosAda, promoId, setPromoId} : SelectPromosProps) {

    return ( 
    <select value={promoId} onChange={(e) => {
        if (e.target.value==="tous") {
            setPromoId("tous")}
        else {
            setPromoId(parseInt(e.target.value))
        }}}>
            <option value="tous">Toutes les promos</option>
            {promosAda.map((promo) => {
                return (
                    <option key={promo.id} value={promo.id}>{promo.name}</option>
                )
            })}
            </select>
)
}