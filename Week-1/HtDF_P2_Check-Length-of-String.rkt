;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname HtDF_P2_Check-Length-of-String) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
;DESIGN function that consumes a string and determines whether its length is
;less than 5.  Follow the HtDF recipe and leave behind commented out versions 
;of the stub and template.

;; String -> Boolean                               ; Signature
;; produce TRUE if a string's length is < 5        ; Purpose
;;     and FALSE if a string's length is > 5
(check-expect (less-than-5? "") true)
(check-expect (less-than-5? "1234") true)
(check-expect (less-than-5? "12345") false)
(check-expect (less-than-5? "palindrome") false)


;(define (less-than-5? s)
;    true)                                                ; Stub

;(define (less-than-5? s)                                 ; Template
;  (... s))

;(define (less-than-5? s)                                 ; Function body
;  (if (> 5 (string-length s))                            ; my attempt
;         true 
;         false))

(define (less-than-5? s)                                  ; Prof's answer
  (< (string-length s) 5))

(less-than-5? "brud")                                     ; Run it!
