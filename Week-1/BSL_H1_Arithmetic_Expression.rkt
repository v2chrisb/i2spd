;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname BSL_H1_Arithmetic_Expression) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
; (require 2htdp/image)

; 9/6/13 @ 0702
; Write the BSL expression that represents the arithmetic expression (7 - 2) * 4 which equals 20. 
; Do not just write 20! Instead write BSL expression that clearly mirrors  (7 - 2) * 4.

(* 4 (- 7 2))

; Evaluation steps follow.
; (* 4 (- 7 2))
; (* 4 5)
; 20