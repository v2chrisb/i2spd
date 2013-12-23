;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname HtDD_H1_Perfect-Oatmeal) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
;; Week2, HW#1
;; perfect-oatmeal.rkt

;; =================
;; Data definitions:
;; *************
;; DEFINITION #1:  OatmealTemp

;; OatmealTemp is one of:
;;   - too cold
;;   - just right
;;   - too hot
;; interp. the temp (C) of oatmeal
;; <examples are redundant w/enumerations>
#;
(define (fn-for-oatmeal-temp omt)
  (cond [(< 71 omt) "too cold."]
        [(= 71 omt) "just right."]
        [(> 71 omt) "too hot."]))

;;Template rules used:
;;  - one of: 3 cases
;;  - atomic distinct" "too cold"
;;  - atomic distinct" "just right"
;;  - atomic distinct" "too hot"


;; *************
;; DEFINITION #2:  Adjustment

;; Adjustment is one of:
;;   - up
;;   - same
;;   - down
;; interp. the adjustment needed for proper cooking temp.
;; <examples are redundant>
#;
(define (fn-for-adjustment adj)
  (cond [(< 71 omt) "up."]
        [(= 71 omt) "same."]
        [(> 71 omt) "down."]))

;;Template rules used:
;;  - one of: 3 cases
;;  - atomic distinct" "up"
;;  - atomic distinct" "same"
;;  - atomic distinct" "down"

;; =================
;; Functions:

;; OatmealTemp -> Adjustment                              ; Stub
;; read oatmeal temp. and adjust burner, if needed        ; Purpose
;(check-expect (ot2a (if (< 70) "up" "false")))
;(check-expect (ot2a 71) "just right")
;(check-expect (ot2a 72) "down")

;(define (ot2a omt) "just right.")

(define (ot2a omt)
  (cond [(< 71 omt) "turn burner down."]
        [(= 71 omt) "just right."]
        [(< omt 71) "turn burner up."]))