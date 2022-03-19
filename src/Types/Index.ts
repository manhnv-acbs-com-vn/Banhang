import { MouseEventHandler, ChangeEventHandler, FocusEventHandler } from "react";

export interface ProductType{
    id?:string ;
    title:string;
    mota?:string;
    tien:number;
    giam?:number;
    khuyenmai?:string;
    theloai?:string;
    color?:string;
    size?:string;
    img:string;
    witbh?:string;

} 
export interface ProductListType{
    
    id: string; 
    img: string; 
    title: string; 
    khuyenmai: string; 
    tien: number; 
    color: string; 
    giam: number; 
    theloai: string; 
    size: string;
} []

export interface aoType{
    id: string;
    img: string;
    title: string;

    khuyenmai: string;
    tien: number;
    color: string;
    giam: number;

    theloai: string;
 

}
