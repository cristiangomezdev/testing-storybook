/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
   * Mensaje a mostrar en la etiqueta
   */
    label?: string;
    /**
   * Tamaño de la etiqueta
   */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * si quiere todo capitalizado
   */
    allCaps?: boolean;
    /**
   * colores basicos del button
   */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
   * colores basicos del button
   */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
