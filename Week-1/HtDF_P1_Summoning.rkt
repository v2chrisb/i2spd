;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname HtDF_P1_Summoning) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
;Design a function that generates a summoning charm. For example: 
;
;   (summon "Firebolt") should produce "accio Firebolt"
;   (summon "portkey")  should produce "accio portkey"
;   (summon "broom")    should produce "accio broom"
;   
;Remember, when we say DESIGN, we mean follow the recipe.
;
;Follow the HtDF recipe and leave behind commented out versions of the stub and template.

;; String -> String                              ; this is the Signature
;; produce two strings from one                  ; this is the Purpose
(check-expect (summon "Firebolt") "accio Firebolt")
(check-expect (summon "portkey") (string-append "accio " "portkey"))

;(define (summon s) "")                           ; this is the Stub

(define (summon s)
  (string-append "accio " s))

(summon "clambake")
