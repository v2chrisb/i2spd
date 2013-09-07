;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname BSL_P5_Operate-on-Bool-with-Primitives) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
(require 2htdp/image)
; BSL_P5 -- Write expressions to operate on booleans using primitives.
; 9/6/13 @ 2100

(define IMAGE1 (rectangle 10 15 "solid" "red"))
(define IMAGE2 (rectangle 15 10 "solid" "red"))

; 1) IMAGE1 is taller than IMAGE2
; You used the less than sign instead of greater than.
(< (image-height IMAGE1)
   (image-height IMAGE2))

; 2) IMAGE1 is narrower than IMAGE2
(< (image-width IMAGE1)
   (image-width IMAGE2))

(= (image-width IMAGE1)
   (image-width IMAGE2))

; 3) IMAGE1 has both the same width AND height as IMAGE2
; This begs for the use of a logical "and" operator.
(= (image-height IMAGE1)
   (image-height IMAGE2))

; ===== PROF'S ANSWERS =====
(> (image-height IMAGE1)
   (image-height IMAGE2))

(< (image-width IMAGE1)
   (image-width IMAGE2))

(and (= (image-width IMAGE1) 
        (image-width IMAGE2)) 
     (= (image-height IMAGE1)
        (image-height IMAGE2)))
