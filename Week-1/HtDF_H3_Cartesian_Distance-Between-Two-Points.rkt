;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname HtDF_H3_Cartesian_Distance-Between-Two-Points) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
; Use the How to Design Functions (HtDF) recipe to design a function called distance that consumes 
; four numbers representing two points and produces the distance between the two points.

;Use (distance 3 0 0 4), which should produce 5 as your first example/test. Once your function works with 
;that test, try (distance 1 0 0 1) which should produce (sqrt 2). Read the error message carefully and use 
;the help desk to figure out how to use check-within for this case.
;
;Remember, when we say DESIGN, we mean follow the recipe.
;
;Leave behind commented out versions of the stub and template.
;
;NOTE:
;
;The signature for such a function is:

;; Number Number Number Number -> Number

;; The template for such a function is:

; (define (distance x1 y1 x2 y2)
;   (... x1 y1 x2 y2))

;; Number Number Number Number -> Number                             ; Signature
;; Produce the distance between two points given four numbers
;; that represent two points.                                        ; Purpose

(check-expect (distance 3 0 0 4) 5)
(check-within (distance 1 0 0 1) 1.4142 1.4142)

;(define (distance x1 y1 x2 y2) 0)                                    ; Stub

; (define (distance x1 y1 x2 y2)                                     ; Template
;   (... x1 y1 x2 y2))
;(sqrt (+ (sqr (- 0 3)) (sqr (- 4 0))))                              ; This ex. evaluates
(define (distance x1 y1 x2 y2)
  (sqrt (+ (sqr (- x2 x1)) (sqr (- y2 y1)))))

(distance 1 0 0 1)




