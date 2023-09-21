function warning(){
    const haba = window.matchMedia('(max-width: 1000px)')
    if(haba.matches){
        alert("現在このホームページはホームを除いてスマートフォンサイズの画面には対応していません。もしよろしければパソコン等で閲覧ください。")
    }
}