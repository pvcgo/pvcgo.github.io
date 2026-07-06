setTimeout(function(){window.location.reload();}, 300000);
          const svg = document.getElementById("so-do-thi-dau");          
          

          class QuocGia
          {
            constructor(id, name, flagUrl)
            {
              this.id = id;
              this.name = name;
              this.flagUrl = flagUrl;
            }
          }

          const danhSachQuocGia = [
              new QuocGia("Algeria", "Algeria", "https://flagcdn.com/dz.svg"),
              new QuocGia("AcHen", "Argentina", "https://flagcdn.com/ar.svg"),
              new QuocGia("australia", "Úc", "https://flagcdn.com/au.svg"),
              new QuocGia("Aos", "Áo", "https://flagcdn.com/at.svg"),
              new QuocGia("Bir", "Bỉ", "https://flagcdn.com/be.svg"),
              new QuocGia("BIH", "Bosnia và Herzegovina", "https://flagcdn.com/ba.svg"),
              new QuocGia("BRA", "Brazil", "https://flagcdn.com/br.svg"),
              new QuocGia("CAN", "Canada", "https://flagcdn.com/ca.svg"),
              new QuocGia("Cabo", "Cabo Verde", "https://flagcdn.com/cv.svg"),
              new QuocGia("COL", "Colombia", "https://flagcdn.com/co.svg"),
              new QuocGia("BoBienN", "Bờ Biển Ngà", "https://flagcdn.com/ci.svg"),
              new QuocGia("CRO", "Croatia", "https://flagcdn.com/hr.svg"),
              new QuocGia("ECU", "Ecuador", "https://flagcdn.com/ec.svg"),
              new QuocGia("AiCap", "Ai Cập", "https://flagcdn.com/eg.svg"),
              new QuocGia("ENG", "Anh", "https://flagcdn.com/gb-eng.svg"),
              new QuocGia("FRA", "Pháp", "https://flagcdn.com/fr.svg"),
              new QuocGia("GER", "Đức", "https://flagcdn.com/de.svg"),
              new QuocGia("GHANA", "Ghana", "https://flagcdn.com/gh.svg"),
              new QuocGia("JPN", "Nhật Bản", "https://flagcdn.com/jp.svg"),
              new QuocGia("MARoc", "Ma Rốc", "https://flagcdn.com/ma.svg"),
              new QuocGia("MEXi", "Mexico", "https://flagcdn.com/mx.svg"),
              new QuocGia("haLan", "Hà Lan", "https://flagcdn.com/nl.svg"),
              new QuocGia("nauy", "Na Uy", "https://flagcdn.com/no.svg"),
              new QuocGia("PAR", "Paraguay", "https://flagcdn.com/py.svg"),
              new QuocGia("BoDaoNha", "Bồ Đào Nha", "https://flagcdn.com/pt.svg"),
              new QuocGia("NamPhi", "Nam Phi", "https://flagcdn.com/za.svg"),
              new QuocGia("SEN", "Senegal", "https://flagcdn.com/sn.svg"),
              new QuocGia("TayBanNha", "Tây Ban Nha", "https://flagcdn.com/es.svg"),
              new QuocGia("thuyDien", "Thụy Điển", "https://flagcdn.com/se.svg"),
              new QuocGia("ThuySi", "Thụy Sĩ", "https://flagcdn.com/ch.svg"),
              new QuocGia("USA", "Hoa Kỳ", "https://flagcdn.com/us.svg"),
              new QuocGia("Congo", "CHDC Congo", "https://flagcdn.com/cd.svg")
          ];

          const quocGiaMap = new Map(
              danhSachQuocGia.map(qg => [qg.id, qg])
          );

          class TranDau
          {
            constructor(id, thoiGian, quocGiaAId, diemSoQuocGiaA, quocGiaBId, diemSoQuocGiaB)
            {
              this.id = id;
              this.thoiGian = thoiGian;
              this.quocGiaAId = quocGiaAId;
              this.diemSoQuocGiaA = diemSoQuocGiaA;

              this.quocGiaBId = quocGiaBId;
              this.diemSoQuocGiaB = diemSoQuocGiaB;
            }

            renderDanhSachGanDay(dangDienRa = 0)
            {
              let urlA = "https://pvcgo.github.io/wc/blank.svg";
              let nameA = "---";
              let pointA = "-";
              if (this.quocGiaAId !== null)
              {
                let qg = quocGiaMap.get(this.quocGiaAId);
                urlA = qg.flagUrl;
                nameA = qg.name;
              }

              if (this.diemSoQuocGiaA !== null)
              {
                pointA = this.diemSoQuocGiaA;
              }

              let urlB = "https://pvcgo.github.io/wc/blank.svg";
              let nameB = "---";
              let pointB = "-";
              if (this.quocGiaBId !== null)
              {
                let qg = quocGiaMap.get(this.quocGiaBId);
                urlB = qg.flagUrl;
                nameB = qg.name;
              }

              if (this.diemSoQuocGiaB !== null)
              {
                pointB = this.diemSoQuocGiaB;
              }
            /*
              return `${this.thoiGian}<br>
                <img src="${urlA}" width="28" height="20"><span style="margin-left:10px;">${nameA}</span><span style="margin-left:10px;">${pointA}</span> - 
                <span style="margin-right:10px;">${pointB}</span><span style="margin-right:10px;">${nameB}</span><img src="${urlB}" width="28" height="20"><br>`;
*/
              if (dangDienRa == 0)
              {
                return `<div style="border-radius: 6px; border: 0.3px solid rgba(255,255,255,0.3);padding:3px 8px;margin-top:6px;background: rgba(255,255,255,0.3);">
                          <span style="font-size:small;"><i>${this.thoiGian}</i></span><br>
                          <table border="0" style="width:100%;text-align:center;">
                            <tr>
                              <td style="width:50%;">
                                <span style="margin-left:10px;">${pointA}</span>
                              </td>
                              <td>
                                <span style="margin-right:10px;">${pointB}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span style="margin-left:10px;">${nameA}</span>
                              </td>
                              <td>
                                <span style="margin-right:10px;">${nameB}</span>
                              </td>
                            </tr>
                          </table>
                        </div>`;
              }
              else
              {
                return `<div style="border-radius: 6px; border: 1.5px solid orange;padding:3px 8px;margin-top:6px;box-shadow: 0px 0px 6px rgba(255,255,255,0.4);color:var(--gold);font-weight:bold;background: rgba(255,255,255,0.3);">
                          <span style="font-size:small;"><i>${this.thoiGian}</i></span><br>
                          <table border="0" style="width:100%;text-align:center;">
                            <tr>
                              <td style="width:50%;">
                                <span style="margin-left:10px;">${pointA}</span>
                              </td>
                              <td>
                                <span style="margin-right:10px;">${pointB}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span style="margin-left:10px;">${nameA}</span>
                              </td>
                              <td>
                                <span style="margin-right:10px;">${nameB}</span>
                              </td>
                            </tr>
                          </table><br>
                          <marquee style="font-size:small;">Đang diễn ra..</marquee>
                        </div>`;
              }
            }
          }

          class VongDau
          {
            constructor(ten, danhSachTranDau)
            {
              this.ten = ten;
              this.danhSachTranDau = danhSachTranDau;
            }
          }
