// URL에서 name 파라미터 가져오기
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const name = getQueryParam('name') || '222'; // 파라미터가 없으면 기본값 '222'

// SVG 생성
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 300 150">
    <rect width="300" height="150" fill="#f9f9f9" stroke="#4CAF50" stroke-width="4" rx="15" ry="15"/>
    <text x="50%" y="50%" font-size="24" font-family="Arial, sans-serif" fill="#333" dominant-baseline="middle" text-anchor="middle">
      my name is ${name}!
    </text>
</svg>
`;

// URL로 직접 접근한 경우 SVG만 반환
if (document.contentType === 'application/javascript') {
    document.body.innerHTML = svgContent;
    document.body.style.margin = '0';
    document.body.style.padding = '0';
} else {
    // HTML 페이지에서 로드된 경우 SVG를 컨테이너에 삽입
    document.getElementById('svg-container').innerHTML = svgContent;
}
