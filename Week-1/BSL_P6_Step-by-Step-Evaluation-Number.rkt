;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname BSL_P6_Step-by-Step-Evaluation) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
; (require 2htdp/image)
; BSL_P6 Step by step evaluation of a call to a function that calls a number primitive in its body.
; 9/7/13 @ 0620

; Given the following function definition:
; (define (foo n)
; (* n n))

; Write out the step-by-step evaluation of the expression: 
; (foo (+ 3 4))
; Be sure to show every intermediate evaluation step.

; Well, I think (foo (+ 3 4 )) becomes (foo 7)

(define (foo n)
  (* n n))

(foo (+ 3 4))

; (foo (+ 3 4))
; (foo 7)
; (* 7 7)
; 49
; I actually got it right. :-)