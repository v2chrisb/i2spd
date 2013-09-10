;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname HtDF_EX2_Area-of-Square) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
;DESIGN a function called area that consumes the length of one side 
;of a square and produces the area of the square.
;
;Remember, when we say DESIGN, we mean follow the recipe.
;
;Leave behind commented out versions of the stub and template.

;; Number -> Number                                ; this is the signature
;; produce the area of a square by 
;; multiplying one side's length by itself         ; this is the purpose
(check-expect (area 3) (* 3 3))
(check-expect (area 2.3) (* 2.3 2.3))

;(define (area n) 0)                                ; this is the stub

(define (area n)
  (* n n))

(area 2.3)
