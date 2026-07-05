function themTranDau(vongDau, stt, x, y, tranDau, fill_opacity=0.2,stroke="white",w = 200, h = 140)
          {
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            //rect.setAttribute("id", vongDau + "_" + stt + "a");
            rect.setAttribute("x", x);
            rect.setAttribute("y", y);
            rect.setAttribute("width", w);
            rect.setAttribute("stroke", stroke);
            rect.setAttribute("stroke-width", 3);
            rect.setAttribute("stroke-opacity", 0.6);
            rect.setAttribute("height", h);
            rect.setAttribute("fill", "black");
            rect.setAttribute("rx", 8);
            rect.setAttribute("ry", 8);
            rect.setAttribute("fill-opacity",fill_opacity);
            svg.appendChild(rect);

            const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            let urlA = "https://pvcgo.github.io/wc/blank.svg";
            let nameA = "---";
            let pointA = "-";
            if (tranDau.quocGiaAId !== null)
            {
              let qg = quocGiaMap.get(tranDau.quocGiaAId);
              urlA = qg.flagUrl;
              nameA = qg.name;
            }

            if (tranDau.diemSoQuocGiaA !== null)
            {
              pointA = tranDau.diemSoQuocGiaA;
            }

            let urlB = "https://pvcgo.github.io/wc/blank.svg";
            let nameB = "---";
            let pointB = "-";
            if (tranDau.quocGiaBId !== null)
            {
              let qg = quocGiaMap.get(tranDau.quocGiaBId);
              urlB = qg.flagUrl;
              nameB = qg.name;
            }

            if (tranDau.diemSoQuocGiaB !== null)
            {
              pointB = tranDau.diemSoQuocGiaB;
            }

            g.innerHTML = `
                <text id="${vongDau}_${stt}_thoiGian" x="${x+42}" y="${y+24}" fill="white" font-size="16" font-weight="bold">${tranDau.thoiGian}</text>

                <image id="${vongDau}_${stt}_a_image" href="${urlA}" x="${x+6}" y="${y+40}" width="38" height="28"/>

                <text id="${vongDau}_${stt}_a_text" x="${x+60}" y="${y+60}" fill="white" font-size="20" font-weight="bold">${nameA}</text>

                <text id="${vongDau}_${stt}_a_diem" x="${x+164}" y="${y+60}" fill="white" font-size="22" font-weight="bold">${pointA}</text>

                <image id="${vongDau}_${stt}_b_image" href="${urlB}" x="${x+6}" y="${y+85}" width="38" height="28"/>

                <text id="${vongDau}_${stt}_b_text" x="${x+60}" y="${y+107}" fill="white" font-size="20" font-weight="bold">${nameB}</text>

                <text id="${vongDau}_${stt}_b_diem" x="${x+164}" y="${y+107}" fill="white" font-size="22" font-weight="bold">${pointB}</text>
            `;

            svg.appendChild(g);
          }

          for (let i=1; i<=4; i++)
          {
            themTranDau("vongDau16", i, 20, 20 + (i-1) * 170, vong16.danhSachTranDau[i-1]);
          }

          for (let i=5; i<=8; i++)
          {
            themTranDau("vongDau16", i, 1380, 20 + (i-5) * 170, vong16.danhSachTranDau[i-1]);
          }

          for (let i=1; i<=2; i++)
          {
            themTranDau("tuKet", i, 240, 105 + (i-1) * 345, tuKet.danhSachTranDau[i-1]);
          }

          for (let i=3; i<=4; i++)
          {
            themTranDau("tuKet", i, 1160, 105 + (i-3) * 345, tuKet.danhSachTranDau[i-1]);
          }

          themTranDau("banKet", 1, 460, 280, banKet.danhSachTranDau[0], 0.5, "var(--gold)");
          themTranDau("banKet", 1, 940, 280, banKet.danhSachTranDau[1], 0.5, "var(--gold)");
          themTranDau("trungKet", 1, 700, 280, chungKet.danhSachTranDau[0], 0.7, "red");
          themTranDau("giai3", 1, 700, 500, tranhHangBa.danhSachTranDau[0], 0.6, "red");
