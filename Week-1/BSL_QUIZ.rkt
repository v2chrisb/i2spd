;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname BSL_QUIZ) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
(require 2htdp/image)

; QQ #1
; FEEDBACK EXPLANANTION:
; The answer is (* (- 7 2) 4) or (* 4 (- 7 2))
(define (average x y)
  (/ (+ x y) 2))

(average (+ 4 6) (* 6 2))

(* 4 (- 7 2))

; ===========
; QQ #3 What image does the expression below produce?
; FEEDBACK EXPLANATION:
; Make sure you understand the order of arguments to image functions such as above and beside.
; In this example, above puts the triangle at the top, followed by the ellipse and then the square.
; Then, beside takes that image, and puts it to the left of Frosty.

(beside (above (triangle 30 "solid" "blue")
               (ellipse 30 50 "solid" "green")
               (square 30 "solid" "red"))
        (text "Frosty" 24 "black"))

; ===========
; QQ # 4 What is the result of (foo "cat") using the following function definition?
; FEEDBACK EXPLANATION:
; Here are the evaluation steps...
;
;(if (string=? (string-ith "cat" 0) "a")
;  (string-append "cat" "a")
;  "cat")
;
;(if (string=? "c" "a")
;  (string-append "cat" "a")
;  "cat")
;
;(if false 
;    (string-append "cat" "a") 
;    "cat")
;
; Final result is "cat"
(define (foo s)
  (if (string=? (substring s 0 1) "a")
      (string-append s "a")
      s))

(foo "cat")

; ===========
; QQ # 5 What is the result of (bar "hello") using the following function definition? 
; The substring command, in this case, takes everything *after* position 3, i.e. "lo"
;(if (>= (string-length "hello") 5)
;    (substring "hello" 3)
;    (string-append "hello" "hello"))
;
;(if (>= 5 5)
;    (substring "hello" 3)
;    (string-append "hello" "hello"))
;
;(if true
;    (substring "hello" 3)
;    (string-append "hello" "hello"))
;
;(substring "hello" 3)
; Final result is "lo"

(define (bar s)
  (if (>= (string-length s) 5)
      (substring s 3)
      (string-append s s)))

(bar "hello")

; ===========
; QQ # 6 Consider the following:

(define (greet x)
  (string-append "hello x"))

; Why doesn't (greet "Stephen") produce "hello Stephen"?
; (a) greet should be called with two arguments: "hello " and "Stephen"
; (b) Passing string-append only one argument causes an error
; (c) There shouldn't be a space in "hello x"
; (d) x is part of a string in the function body, but not passed as a parameter
; ...and I chose letter (d) for the answer



