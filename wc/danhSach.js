const vong32 = new VongDau("Vòng 32 đội", [
              new TranDau(1,  "28/06 02:00", "NamPhi", 0, "CAN", 1),

              new TranDau(2,  "29/06 00:00", "BRA", 2, "JPN", 1),
              new TranDau(3,  "29/06 03:30", "GER", 1, "PAR", 1), // Paraguay thắng luân lưu
              new TranDau(4,  "29/06 08:00", "haLan", 1, "MARoc", 1), // Ma Rốc thắng luân lưu

              new TranDau(5,  "30/06 00:00", "BoBienN", 1, "nauy", 2),
              new TranDau(6,  "30/06 04:00", "FRA", 3, "thuyDien", 0),
              new TranDau(7,  "30/06 09:00", "MEXi", 2, "ECU", 0),

              new TranDau(8,  "01/07 23:00", "ENG", 2, "Congo", 1),
              new TranDau(9,  "02/07 03:00", "Bir", 3, "SEN", 2),
              new TranDau(10, "02/07 07:00", "USA", 2, "BIH", 0),

              new TranDau(11, "03/07 02:00", "TayBanNha", 3, "Aos", 0),
              new TranDau(12, "03/07 06:00", "BoDaoNha", 2, "CRO", 1),
              new TranDau(13, "03/07 10:00", "ThuySi", 2, "Algeria", 0),

              new TranDau(14, "04/07 04:00", "australia", 1, "AiCap", 1), // Ai Cập thắng luân lưu
              new TranDau(15, "04/07 05:00", "AcHen", 3, "Cabo", 2),
              new TranDau(16, "04/07 08:30", "COL", 1, "GHANA", 0)
          ]);


          const vong16 = new VongDau("Vòng 16 đội", [
              new TranDau(17, "05/07 00:00", "CAN", 0, "MARoc", 3),
              new TranDau(18, "05/07 04:00", "PAR", 0, "FRA", 1),

              new TranDau(19, "07/07 02:00", "BoDaoNha", 0, "TayBanNha", 1),
              new TranDau(20, "07/07 07:00", "USA", 1, "Bir", 4),

              new TranDau(21, "06/07 03:00", "BRA", 1, "nauy", 2),
              new TranDau(22, "06/07 08:00", "MEXi", 2, "ENG", 3),              

              new TranDau(23, "07/07 23:00", "AcHen", 3, "AiCap", 2),
              new TranDau(24, "08/07 03:00", "ThuySi", "0 (4)", "COL", "0 (3)")
          ]);


          const tuKet = new VongDau("Tứ kết", [
              new TranDau(25, "10/07 03:00", "MARoc", 0, "FRA", 2),
              new TranDau(26, "11/07 02:00", "TayBanNha", 2, "Bir", 1),
              new TranDau(27, "12/07 04:00", "nauy", 1, "ENG", 2),
              new TranDau(28, "12/07 08:00", "AcHen", null, "ThuySi", null)
          ]);

          const banKet = new VongDau("Bán kết", [
              new TranDau(29, "15/07 02:00", "FRA", null, "TayBanNha", null),
              new TranDau(30, "16/07 02:00", "ENG", null, null, null)
          ]);

          const tranhHangBa = new VongDau("Tranh hạng ba", [
              new TranDau(31, "19/07 04:00", null, null, null, null)
          ]);

          const chungKet = new VongDau("Chung kết", [
              new TranDau(32, "20/07 02:00", null, null, null, null)
          ]);

          const danhSachVongDau = [vong32, vong16, tuKet, banKet, tranhHangBa, chungKet];
