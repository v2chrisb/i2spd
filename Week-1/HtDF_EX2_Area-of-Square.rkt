;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname HtDF_EX2_Area-of-Square) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
; HtDF recipe area

;DESIGN a function called area that consumes the length of one side 
;of a square and produces the area of the square.
;
;Remember, when we say DESIGN, we mean follow the recipe.
;
;Leave behind commented out versions of the stub and template.

;; Number -> Number                              ; signature
;; given the length of one side of square, produce the areal
;; of a square                                   ; purpose
;; (define sq n) 0)

;; (define sq n) 0)                              ; stub

;; (sq 1) should produle 1
;; (sq 2) should produce 4
(check-expect (sq 3) 3)
(check-expect (sq 3.2) (* 3.2 3.2))

(define (sq n) 0)


