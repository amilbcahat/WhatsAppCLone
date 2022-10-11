const libraryicon = () => {
   return(
   //  this is jsx code.
      <svg
      width={20}
      height={23}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_534_180"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={20}
        height={23}
      >
        <rect width={20} height="22.0183" fill="url(#pattern0)" />
      </mask>
      <g mask="url(#mask0_534_180)">
        <rect x={-3} width={29} height="22.0183" fill="#4E4E4E" />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_534_180"
            transform="translate(-0.0504587) scale(0.00215023 0.00195312)"
          />
        </pattern>
        <image
          id="image0_534_180"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABfcAAAX3AEZBFdWAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvRQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxRfo/QAAAPt0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKiwtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVnaGlqa2xtbm9wcXJzdHV3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f62qfrcAAAUF0lEQVR42u3daWBU5b2A8ZOFJaAECWCQRAQMqAhICgSlIAglRQxGZS1r2GKEiwRlK0qQRZQLVXaUBtoKCpS0UjBsZVEMS5ArmwKWC2ERQhISMHv+X+4HuYoIk5w5+5zn+SrOzPt/fwxzZs6cURQiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIrJpEc+NTFowd8aUxIS4frHRHds2jwirXT2AuWgroHrtsIjmbTtGx/aLS0icMmPugqRRz0XY73E+Pe+k3LGsI1uSZ77yQtSDldjMilfpwagXXpmZvOVI1p2nenLe07Z6vO32SLmVXf5q0wdJo2J+8wDPCnf72/7Ab2JGJX2w6avLZeXPc0872zzukPWiqpKTKTMHtKrGhv9ctVYDZqacLFE3x/Uh9njwzU6LN5V99+nbgyMru33rK0cOfvvT78q8GuHpZnZYwbN5oqGCtAWDH/V35977PTJoQVqBlunlPmv9Ktrmi+Zyd7z90oPu2vzwF2Zvv6Z9cvltrV5I2EXRqQt/GRzmjs2vP2hlhl5Tu2jxzAIOip6dWPB8Td/e/OCe7x/XdWQHrT2mGi56V5I2o1MV39z8Kp1mfFmi+8CGW7mkoAwxoutr+97ra7t/b9+11w0ZVkaQhatKFKMq2BgX4ju7HxK3scCwUSVauLB0MbCS7QkP+MLuP5CwvcTIOaVbeAggBle2NzHU2bsfmri3zOgpWXcgMEqMr/jv3R37PpF/978XmzCiUZYtMFlM6dy0Bk7c/gbTzpkzn2TLlpgqJlX62UsO+zS50kuflZo1nVTLVnlYzOvyO02ds/1N37ls4mgOW7bO78XUNj7ljO1/aqO5c/nespXmiMnt/r39tz96l9lTyXEPAJFDfWx9TODfK938mbgKgMjJ4bY9iaRS3DdWTMRlAETOj7vHjttf7b/OWTMP1wEQufqq7Y4KA1+5bNU0XAhA5Nue9tr/Hsetm4UrAYjsaGmf7W++1cpJuBSAlH5YzyYf+CwvFQBYUd6UIOu3v+qkPIvH4F4AImf7+1m7/X79/9fyIbgZgMgXj1i5/498YYMRuBuA5Cda9t6gf2K+AMD69jS2ZvmN99hj/a4HINcTLHgl4JdwXQBgl7abfs5Qg+22WTwARCR3mLlLH5YrALATAJFNJp5D/sAmO60cAD+WFWPWumOyBAD2AyBlU015Lej3xzIBgB0BiKw34USB6uvstmoA/NzXjYxec8PDAgD7ApCrXYxdcudMAYCdAUjJOCNXPLpYAGBvACKrqhq13iorbLlgANzWfoO+LltvrwDACQDkUisjVtv8vADAGQAku43+i22VKQBwCgC59qTea22TLQBwDgDJ66DvUp+6JgBwEgC58YyeK336ugDAWQAkv5t+C+36gwDAaQCkoIde6+yeLwBwHgApitVnmT0LBQBOBCDFvfRYZa8iAYAzAUhJH+2L7FMiAHAqAClsr3WN7QsFAM4FIFc0niDQ6IoAwMkA5FhNLSuseUwA4GwAsjXQ+wUGbhUAOB2ALPF+gUsEAM4HIGO9Xd9YAYAvACj18i3BHqUA8AkAktfcqxNA8gQAvgFAznrxsxOhZ8WVAIIatYm6pYY+AUD2qb6YUNA+8QkADW/dzTaNPM+hxdR9WWpeQjsHgPpDgSXiGwBuX0fWvqkt7nLMO+o/agfnIADSXeUnwOKjAERE/jPyDu+NPH9C/d8cJwG4qOpX6EIu+jIAkRPP3/bHKi3z5qnTSQBkrRoAa8W3AYgs+8XVlmvvFJ8HIAMrvv8DxecByM7at3zkcVxcACAnvKL7H57jAgBy/KePyQJSxQ0AZHsFrx/ht13cAEBS//+Hx+eJOwBU9EOBseIOADLvxz8SJW4BkP9YRfb/sXy3AJAoRVEUZbdrAMjBCvzQSKWD4hoAuxVFUWLEPQBkevkApot7AEiMoihb3ASgpNwvjrcqcROALYoSXOQmAPJReQA+EjcBKApW+oqrABSV8zMz9YpcBUD6KivcBUCSPANIEncBWKFscxmA7z3+7mjl7x24pGwNALYpx1wGQCI9rShSXPYMcKy8TfQ9AB6/MNrLbQByFHEbgNc9reh1twEQ9wFY6mlFSwHg8wC2elrRVgD4PIAvPa3oSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAqA5Z5uPBMAdijT04qWawTwqacbPwoAO3Tc04o+1QjgoKcb3woAO/RvTys6qBHARU83vhIAdmi1pxVd1AigNNDDjY8HgB2a7GFBgaUaAUiYh1uPAIAdeszDgsJEK4C2nuZ1DADW942nBbXVDCDW080nAcD6kjwtKFYzgARPN18rGwBWl13L04ISNAOY6enmldcAYHWvedygmZoB7PJ4+1W/A4C1fVfV4wbt0gygpLbHO2hxHQBWdr2Fx+2pXaIZgAzxeA9KbBkArKss1vPuDBHtAFI834UyuhQAVlU6upzNSdEBwI2gcu4kOgcA1pQTXc7WBN3QAYD0LOdelCbpALCi9Cbl7UxP0QPAivLuRvEffA4AZndusH+5G7NCFwBXAsq9IyUofksRAMyraEt8UPm7EnBFFwDSWalIwb2nLErZ+9WJM5dyCuw8u72OBVCQc+nMia/2/mPxH3sHV2hLOos+AHYpavOrEnx/g6Yt2nbs9vywSX9as+NoZhnPACoP8DKP7ljzp0nDnu/WsW2Lpg3uD67qp3obdukEQHoomgus17LboPHvrEo9dKEYAHer+MKh1FXvjB/UrWW9QO0z7yF6ATgSoOiYX3i3scv2ZALg1jL3LBvbLdxPzzkHHNENgMQp+le3Y/x7W88D4PzW9+I71jVgwHGiH4CMIMWggqOGztl4utSNAEpPb5wzNCrYqMkGZegIQCYqhhbUst/cLwrcA6Dgi7n9WgYZO9OJoieAnBDF8KpEjVub4fsAMtaOi6pi/DRDcnQFIIsUcwrvPS+txFcBlKTN6x1u0iAXib4AZLBiWjVjF5/yPQCnFsfWNG+Gg0VvAAXtFDNrOHJdlu8AyFo3sqGp42tXoDsAuRSumJt/mym7S5wPoGT3lDb+Jo8u/JLoD0AOVVdMr86Iz4qcDKDosxF1zJ9a9UNiBABZ76dYUM2BKfnOBJCfMrCmFRPzWy/GAPD8FQQjRfdak+c0AHlrelW3aFyqvq6jCoCMUKyqSsz6IucAKFofU8WyUY0Q4wDIu/6WrUup8+rXzgDw9at1rJuS/7tiJAD5Vw3FwlovzrE7gJzFra2cUI1/ibEA5GhjK9enBPXfVmZfAGXb+gdZOp7Gqq/aoxqAXO2kWNtD0y7ZE8ClaQ9ZPJpOV8V4AFI8yuJlKlWGHbEfgCPDqlg9l1FenGyleLPWTxpZvVQleou9AGyJtnwkjT7x5oF7BUAK54dYvt7H/1xoFwCFf37c8nGEzPduHIqX4nMmVLV8zaFvZdoBQOZboZaPouoEbw+PFK//zTs3xN/ydVdLyLAaQEZCNcvH4D/E+29meQ9A5PDA+6ynPz7TSgCZ461/Irxv4GENm6gFgEjx9jENrF5/jWl5VgHIm1bD6tU3GLNd2/cstAEQEUl/o4XFQ6gzr8AKAAXz6li88BZvaP9etnYAInImZeHkob9rVsuySYR/UGI2gJIPwi1b7j1NOw+auGDDGT32ThcAP30Afnrvjs0bVicvmf/2tInjXo77w7NtGt5jzkyafFxmJoCyj5uYtNcN2zzbPy5+7OtTZ7z7/vJVH6ds/vexa3ruma4A7qzi7IHNq+ZOGBbT7uFgI0fVer95APYb+oFP8MPtYoZNmLtq84Gz+YZvj/EAbu16+uo3+0Xea9DBUHy2OQCy4w06AL43st+bq9PNve6auQBudn7H4le7Nw7QfYB1V5oBYKX+X+QLaNz91SU7zluxF5YAuPkG6rENs4c20/c8w98eMRrAkd/q+oD9mg2dveFYoXW7YCGAm8+nm6d00vHkucDxeUYCyBsfqN9jrd5pyuZsq+dvOQARkeID7/XR7aAqbJ1xANaF6Xbg2ue9A8V2mL0tAIiIyNk1oyP1+esVfcYYAGf0+cg3MHL0mrO2Gbt9AIiIXN8xPVqHNw6CPzICwN90OIq9J3r6DntdXdleAERE8lMGaJ/0wFy9AVz7g3aXA1LybTdu+wEQkcJNcVpPOGm0V18Anz+k9YSNuE2Fdpy1LQGISPG2UdpOswhMKtEPQPFUbW9ahI7aVmzTQdsVgIiU7h6j6UV3+zN6ATgdpemwZMxuG19Q3cYARKTsy/GN9H4tqB5Asob3rhuO/9LeP6hgbwAiIumTmuj6WlAtgOze3n9EOcn+11G3PwAR2dWnkpdb8MhJrQCOeftNqEp9djlhto4AIHIxycuXA/dt0wZgs5eHpGFJF50xWYcAEClZ/4x3RwMLtAD4b+9e/T+zvsQpc3UMABE5PsardwlHFnkLoGiYV+/2jTnuoKE6CYDI1anenIj+dKZ3AK5488nvfVOvOmqkzgIgkjvLi9MxGh31BsDXXlzZre6sXIcN1GkARG7Mr6/+uwMb1QP4VP3Rf/35Nxw3TucBEClcqvrvpv8ctQDeVn3eX8OlhQ4cphMBiBQvvV/1S8EyNQDKRqq9/fuXFjtylM4EIJI7We21WAaXVhxAqdorIwdNznXoIJ0KQOTsAJXnk/YtriiA4r4qz+wccNaxY3QuAJEDHdTtU2xhxQAUxqq73Q4HHDxEJwMQ2RChaqe651cEQH53VTcascHRI3Q2ACmaper7+V1ulA/gRhc1t1h1VpEAwMpOtFf1bJ1bHoBcVf+utD/h9Pk5HoCULVDzCUFUjmcAOWpO/rlnQZkAwPrOdFOxaa02evqvG1upuKluZ3xgeL4AQCRZxbUpann9H2/7o8k+MTol3yeWcelFxeRevOQTg8tXTopvtNzUy3UFLfeRsZ1UdvjISuSrCPP2v8lhX5naDmWlryxFcvuYtf/98nxmaCuVCeI7LTTlet1Vl/jQyCYojU27r2un0nam/nPtXz9cNG/2tInjEoYP7N0zutOTkc0iwuvWqtfoscj2XWP6DIkfN3n6uwtXrE5J3b3/yKnzWapepB4w4TLmEYdUvcjKOn/qyP7dqSmrVyx8d/rkcfFD+sR0bR/5WKN6teqGRzSLfLJTdM/eA4cnjJs4bfa8RR/+de0/U3emnbpm2qY0VpQ0I9+kyfrm8w3LZozt37Vl/cpeDjwgtEXXAYlzkjenny//XdecWKP3v3f5n/sWnU/fnDwncUDXFqHefqWwcv2WXfuPnbFsw+ffZBn5ZlOaoihj9b7Rwm93rVucNLpv58dDA/Udvl+tR7sMn/G3Ly56mMlMQ3/c0G+uh4VfTls9c0SXR2vp/AgCQx/v3Hd00uJ1u77V/ZSjsYqihOh1FmtZxp5Vbw7uEGbCRcSrPhIdP+eT/Vfu9DA+qmzg/a690z3m/c8/5o95rpkJPxPoH9Zh8Jur9mTo9aRwNURRFCVO681kHVw3Jz66qQW/mBLSMWHx59m3PZydNY26u1p7bt/6tA/H/a6++euu0jQ6fs66g5p/Xjvux6e1nd7+lT+1aWHiC08EKxYXFj0++cAPPz+uowZdwfyhWz76y0//y+vPPuRn8cqDn3ghceGmU94+Iey8+fibqj+svZA6d2hr638p4dZnx4djZ+28efmdC08YcQ+RN9/8vb5zVmyEv53WXq310LmpF1RvYl7Tnz7VViEge8+ilzvUUuxZwBPxq06KSN7v9b/t7tdF5OSq+CcCbLr4Wh1eXrQnW8X+33ImRYUE/HAgeXy3+ortq93jre1Zw/W+1RHZ29/qUdv+q6/fLfEX/x5WaP8V5SnP16nN2Toj9mF/xTn5N9f5NXn15o5a/sOxM7Z6/hmp80/98n+psfAu17EpSHt/YFM/hRyXX9OB76fd5bdUShf++sduovb96lX+8ZUJrSszSSdXuXXCyuO/OkrYd+cT3x6dfuqnP5KxYeIzNZifb1TjmYkbfv59vVPTH737H43oPGjSrDEvRoUyNV8r9Mk+r817I65LBKMgIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjKy/wMQLXAFsbaa8AAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
    
    
   );
}

export default libraryicon;