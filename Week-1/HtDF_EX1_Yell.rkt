;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname HtDF_EX1_Yell) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
;DESIGN a function called yell that consumes strings like "hello" 
;and adds "!" to produce strings like "hello!".
;
;Remember, when we say DESIGN, we mean follow the recipe.
;
;Leave behind commented out versions of the stub and template.

;; String -> String                             ; this is the signature
;; produce one string by adding two strings     ; this is the purpose
(check-expect (yell "hello") "hello!")
(check-expect (yell "bye") "bye!")

;(define (yell s) "")                            ; this is the stub
;(define (yell s)                                ; this is a template
;  (... s))

(define (yell s)
  (string-append s "!"))

(yell "hooya")