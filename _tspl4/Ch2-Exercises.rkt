#lang racket
;; Section 2.1

;(car '(a b c))

;(cdr '(a b c))

;(cons 'a '(b c))

;(cons (car '(a b c))
;      (cdr '(d e f)))

;(define square
;  (lambda (n)
;    (* n n)))

;(define add1
;  (lambda (a)
;    (+ a 1)))

;(define reciprocal
;  (lambda (n)
;    (if (= n 0)
;        "oops!"
;        (/ 1 n))))

;; Exercise 2.2.1 -- convert arith. exp. to Scheme exp.
;; 1.2 * (2 - 1/3) + -8.7
; (- (* 1.2 (- 2 (/ 1 3))) 8.7)
;; Ans. -6.69999~
;; =====
;; (2/3 + 4/9) / (5/11 - 4/3)
; (define A (+ (/ 2 3) (/ 4 9)))
; (define B (- (/ 5 11) (/ 4 3)))
; (/ (+ (/ 2 3) (/ 4 9)) (- (/ 5 11) (/ 4 3)))
;; Ans. -110/87
;; =====
;; 1 + 1 / (2 + 1 / (1 + 1/2))
; (/ (+ 1 1) (/ (+ 2 1) (+ 1 (/ 1 2))))
;; Ans. 1
;; =====
;; 1 * -2 * 3 * -4 * 5 * -6 * 7
; (* 1 -2 3 -4 5 -6 7)
;; Ans. -5040

;; Exercise 2.2.3 -- determine the values of the following expressions.
; (cons 'car 'cdr)
;; Ans. (car . cdr)
;; =====
; (list 'this '(is silly))
;; Ans. (this (is silly))
;; =====
; (cons 'is '(this silly?))
;; Ans. (is this silly?)
;; =====
; (quote (+ 2 3))
;; Ans. (+ 2 3)
;; =====
; (cons '+ '(2 3))
;; Ans. (+ 2 3)
;; =====
; (car '(+ 2 3))
;; Ans. +
;; =====
; (cdr '(+ 2 3))
;; Ans. (2 3)
;; =====
; cons
;; Ans. #<procedure cons>
;; =====
; (quote (quote cons))
;; Ans. 'cons
;; =====
; (car (quote (quote cons)))
;; =====
; (+ 2 3)
;; Ans. 5
;; =====
; (+ '2 '3)
;; Ans. 5
;; =====
; (+ (car '(2 3)) (car (cdr '(2 3))))
;; Ans. 5
;; =====
; ((car (list + - * /)) 2 3)
;; Ans. 5

;; Exercise 2.2.4
; (car (car '((a b) (c d)))) yields a. Determine which compositions
;; of car and cdr applied to ((a b) (c d)) yield b, c, and d.
;(car (cdr (car '((a b) (c d))))) ==> b
;(car (car (cdr '((a b) (c d))))) ==> c
;(car (cdr (car (cdr '((a b) (c d)))))) ==> d